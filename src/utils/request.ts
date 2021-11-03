/*
 * @Descripttion: 网络请求 二次封装umi-request
 * @Author: JayShen
 * @Date: 2021-11-02 09:03:16
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-02 15:05:04
 */

import { extend } from 'umi-request';
import type { RequestOptionsInit } from 'umi-request';
import { notification } from 'antd';

// codeMessage仅供参考 具体根据和后端协商,在详细定义.
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  500: '服务器发生错误，请检查服务器。',
  404: '路径错误',
};
type mapCode = 200 | 400 | 500 | 404;

/**
 * 错误异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;

  if (response && response.status) {
    let errorText =
      codeMessage[response.status as mapCode] || response.statusText;
    const { status, url } = response;
    response
      ?.clone()
      ?.json()
      ?.then((res) => {
        // 后端返回错误信息,就用后端传回的
        errorText = res.msg ? res.msg : errorText;
        notification.error({
          message: `请求错误 ${status}: ${url}`,
          description: errorText,
        });
      });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  prefix: CURRENT_ENV === 'dev' ? '' : BASE_URL,
  timeout: 40000,
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

// request拦截器, 携带token,以及根据环境,配置不同的请求前缀
request.interceptors.request.use((url: string, options: RequestOptionsInit) => {
  //获取存储在本地的token
  const token = localStorage.getItem('token') || '';
  const { appendHeaders = {} } = options || {};
  const headers = {
    token: token,
    lang: 'zh',
    ...appendHeaders,
  };
  // 参数类型 json 和 form，默认json
  options.requestType = options.requestType ? options.requestType : 'json';
  // umi中 get和delete请求参数是 params，post是data，为了方便统一使用data
  if (
    options.method?.toUpperCase() === 'GET' ||
    options.method?.toUpperCase() === 'DELETE'
  ) {
    options.params = options.data;
  }
  if (token) {
    return {
      url,
      options: { ...options, headers: headers },
    };
  }
  return {
    url,
    options: { ...options },
  };
});
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  // token失效 退出来
  // if (data.code === 'INVALID_TOKEN') {
  //     localStorage.clear();
  //     return
  // }
  if (data) {
    return response;
  }
  return Promise.reject(data); //注意：需要reject出去才会在请求不成功或返回错误的code时调用errorHandler
});

export default request;

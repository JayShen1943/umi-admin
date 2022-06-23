/*
 * @Descripttion: 网络请求 二次封装umi-request
 * @Author: JayShen
 * @Date: 2021-11-02 09:03:16
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-23 14:16:44
 */

import { extend } from 'umi-request';
import type { RequestOptionsInit } from 'umi-request';
import errorHandler from "@/utils/errorHandler"
// import { notification } from 'antd';
import {
  checkRepeatRequest,
  addRequest,
  removeRequest,
} from "@/utils/preventRequest"
interface ErrorData {
  name: string
  message: string
}
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
request.interceptors.request.use((url: string, options: RequestOptionsInit): any => {
  //获取存储在本地的token
  const token: string = localStorage.getItem('token') || '';
  const { appendHeaders = {} } = options || {};
  const dateTime = new Date().getTime()
  const headers = {
    token: token,
    lang: 'zh',
    ...appendHeaders,
    "timestamp": dateTime, // 时间戳
  };
  // 重复请求拦截开关 默认flase
  options.openPreventRequest = options.openPreventRequest || false
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
  // 检查是否存在重复请求，若存在则取消已发的请求
  if (options.openPreventRequest) {
    if (checkRepeatRequest(options)) {
      const errorData: ErrorData = {
        name: 'repeatRequest',
        message: '请求重复已拦截:' + options.url,
      }
      return Promise.reject(errorData)
    }
    addRequest(options); // 把当前请求信息添加到pendingRequest对象中
  }
  return {
    url,
    options: { ...options },
  };
});
request.interceptors.response.use(async (response, options: RequestOptionsInit) => {
  const data = await response.clone().json();
  // token失效 退出来
  // if (data.code === 'INVALID_TOKEN') {
  //     localStorage.clear();
  //     return
  // }
  if (options.openPreventRequest) {
    if (typeof options.data === 'string') {
      // 可能response里面返回的config.data是个字符串对象
      options.data = JSON.parse(options.data)
    }
    removeRequest(options)
  }
  if (data) {
    // 开启重复请求拦截的接口请求结束后要清除掉
    return response;
  }
  return Promise.reject(data); //注意：需要reject出去才会在请求不成功或返回错误的code时调用errorHandler
});

export default request;

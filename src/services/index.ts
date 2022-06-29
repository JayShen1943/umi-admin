/*
 * @Descripttion: 请求
 * @Author: JayShen
 * @Date: 2021-11-02 10:29:16
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-29 17:43:31
 */
import request from '@/utils/request';
const apis = CURRENT_ENV === 'dev' ? '/apis' : '';

/**
 * @Description: 剩余参数描述
 * @Author: JayShen
 * @param {String} prefix 请求前缀可以是地址
 * @param {String} requestType 请求参数类型默认josn
 * @param {String} appendHeaders 请求头追加参数
 * @param {String} headers 请求头覆盖参数
 */
export const demoA = (params: any) => {
  return request(`${apis}/admin-api/auth/get-test`, {
    method: 'GET',
    data: params,
    // prefix: 'http://localhost:123',
    appendHeaders: {
      aa: 'zh',
      bb: '123',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // requestType: 'form'
  });
};

// 获取文章列表
export const getArticleList = (params?: any) => {
  return request<API.Response<API.PageList>>(`${apis}/article/pageList`, {
    method: 'get',
    data: params,
    openPreventRequest: true,
  });
};

export const login = (
  params: {
    username: string;
    password: string
  }) => {
  return request<API.Response>(`${apis}/admin-api/auth/login`, {
    method: 'post',
    data: params,
  });
};



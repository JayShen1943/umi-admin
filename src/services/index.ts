/*
 * @Descripttion: 请求
 * @Author: JayShen
 * @Date: 2021-11-02 10:29:16
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-30 13:48:38
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
  return request(`${apis}/demo`, {
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

// 获取实体测试
export const getObjTest = (params?: any) => {
  return request<API.Response>(`${apis}/admin-api/test/object-test`, {
    method: 'get',
    data: params,
    openPreventRequest: true,
  });
};




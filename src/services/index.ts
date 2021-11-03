/*
 * @Descripttion: 请求
 * @Author: JayShen
 * @Date: 2021-11-02 10:29:16
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-02 15:05:18
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
  return request(`${apis}/users/find`, {
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

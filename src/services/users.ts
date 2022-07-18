/*
 * @Descripttion: 用户模块
 * @Author: JayShen
 * @Date: 2022-06-29 10:20:02
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-18 11:06:14
 */
import request from '@/utils/request';
import { apiPrefix } from '@/utils/tools';
import type { Login } from "@/typings/services/user"

/**
 * @Description: 剩余参数描述
 * @Author: JayShen
 * @param {String} prefix 请求前缀可以是地址
 * @param {String} requestType 请求参数类型默认josn
 * @param {String} appendHeaders 请求头追加参数
 * @param {String} headers 请求头覆盖参数
 */
export const demoA = (params: any) => {
  return request(`${apiPrefix()}/demo`, {
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
export const getObjTest = (params: any) => {
  return request<API.Response<API.List>>(`${apiPrefix()}/admin-api/test/list-test`, {
    method: 'get',
    data: params,
    openPreventRequest: true,
  });
};

// 用户登录
export const loginUser = (params: Login) => {
  return request<API.Response>(`${apiPrefix()}/admin-api/auth/login`, {
    method: 'post',
    data: params,
  });
};


// 获取文章列表
export const getArticleList = (params: any) => {
  return request(`${apiPrefix()}/article/pageList`, {
    method: 'get',
    data: params,
    openPreventRequest: false,
  });
};
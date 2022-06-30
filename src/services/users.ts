/*
 * @Descripttion: 用户模块
 * @Author: JayShen
 * @Date: 2022-06-29 10:20:02
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-30 13:49:10
 */
import request from '@/utils/request';
const apis = CURRENT_ENV === 'dev' ? '/apis' : '';
// 用户登录
export const loginUser = (params: {
  username: number | string;
  password: string;
}) => {
  return request(`${apis}/admin-api/auth/login`, {
    method: 'post',
    data: params,
  });
};

// 修改用户密码
export const updatePwd = (params: {
  oldPwd: string;
  newPwd: string;
  confirmPwd: string;
}) => {
  return request(`${apis}/users/update/pwd`, {
    method: 'POST',
    data: params,
  });
};

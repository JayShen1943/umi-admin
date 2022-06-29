/*
 * @Descripttion: 用户模块
 * @Author: JayShen
 * @Date: 2022-06-29 10:20:02
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-29 15:52:22
 */
import request from '@/utils/request';
const apis = CURRENT_ENV === 'dev' ? '/apis' : '';
interface LoginParams {
  adnmin?: number | string;
  username?: number | string;
  password: string;
}
// 用户登录
export const loginUser = (params: LoginParams) => {
  return request(`${apis}/admin-api/auth/login`, {
    method: 'post',
    data: params,
  });
};

type ChangePasswordParams = {
  oldPwd: string;
  newPwd: string;
  confirmPwd: string;
};
// 修改用户密码
export const updatePwd = (params: ChangePasswordParams) => {
  return request(`${apis}/users/update/pwd`, {
    method: 'POST',
    data: params,
  });
};

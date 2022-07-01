/*
 * @Descripttion: 全局共享的数据信息
 * @Author: JayShen
 * @Date: 2021-11-03 10:48:09
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-01 16:39:25
 */

import { GlobalModelType } from "@/@types/models/globalModel"
const getUserInfo = () => {
  let userInfo = {
    username: '默认',
    telephone: 0,
    avatar: '',
  };
  if (localStorage.getItem('userInfo')) {
    userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
  }
  return userInfo;
};

const GlobalModel: GlobalModelType = {
  namespace: 'global', // 表示在全局 state 上的 key
  state: {
    userInfo: getUserInfo(), // 用户信息
    token: localStorage.getItem('token') || '',
    primaryColor: localStorage.getItem('primaryColor') || "#1890FF" // 主题色
  },
  reducers: { // 管理同步方法，必须是纯函数
    // 登录信息
    setUserInfo(state, action) {
      state.userInfo = JSON.parse(JSON.stringify(action.payload));
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    // 存储token
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    // 存储主题色
    setPrimaryColor(state, action) {
      state.primaryColor = action.payload
      localStorage.setItem('primaryColor', action.payload);
    }
  },
  effects: {
    //方法，一般用来发请求，有两个参数，第一个为传递过来的参数，第二参数对应操作
    // *login({playLoad}, { call, put }) {
    //   try {
    //     const res = yield call(api.login, { username: 111, password: 222 })
    //     console.log(res)
    //     yield put({ type: 'save', payLoad: { name: '456' } })
    //   } catch (err){
    //       console.log(err)
    //   }
    // },
  }, // 管理异步操作，采用了 generator 的相关概念
  subscriptions: {}, // 订阅数据源
};
export default GlobalModel;

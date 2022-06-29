/*
 * @Descripttion: 全局共享的数据信息
 * @Author: JayShen
 * @Date: 2021-11-03 10:48:09
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-29 13:42:37
 */

import type { Effect, ImmerReducer } from 'umi';
// import { Reducer, Subscription } from 'umi';
export interface GlobalModelState {
  userInfo: any;
  token: string;
}

export interface GlobalModelType {
  namespace: 'globalModel';
  state: GlobalModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    // 启用 immer 之后
    setUserInfo: ImmerReducer<GlobalModelState>;
    setToken: ImmerReducer<GlobalModelState>;
  };
  subscriptions: any;
}

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
  namespace: 'globalModel', // 表示在全局 state 上的 key
  state: {
    userInfo: getUserInfo(),
    token: localStorage.getItem('token') || ''
  },
  reducers: { // 管理同步方法，必须是纯函数
    // 登录信息
    setUserInfo(state, action) {
      console.log(action, 'state, action');
      state.userInfo = JSON.parse(JSON.stringify(action.payload));
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    // 存储token
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
  },
  effects: {
    *query({ payload }, { call, put }) { },
  }, // 管理异步操作，采用了 generator 的相关概念
  subscriptions: {}, // 订阅数据源
};
export default GlobalModel;

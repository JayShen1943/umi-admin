/*
 * @Descripttion: 全局共享的数据信息
 * @Author: JayShen
 * @Date: 2021-11-03 10:48:09
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-09 16:41:45
 */

import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
export interface GlobalModelState {
  userInfo: any;
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
  };
  subscriptions: any;
}

const GlobalModel: GlobalModelType = {
  namespace: 'globalModel', // 表示在全局 state 上的 key
  state: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {
      name: '默认',
      age: 33,
      phone: 1234,
    },
  },
  reducers: {
    // 登录信息
    setUserInfo(state: string, action: any) {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return state;
    },
  }, // 管理同步方法，必须是纯函数
  effects: {
    *query({ payload }, { call, put }) {},
  }, // 管理异步操作，采用了 generator 的相关概念
  subscriptions: {}, // 订阅数据源
};
export default GlobalModel;

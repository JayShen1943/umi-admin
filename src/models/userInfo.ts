/*
 * @Descripttion: 用户数据和基础信息
 * @Author: JayShen
 * @Date: 2021-11-03 10:48:09
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-03 17:31:55
 */
export default {
  namespace: 'userInfo', // 表示在全局 state 上的 key
  state: {
    userInfo: {},
    lang: '',
    theme: {},
  },
  reducers: {
    setCount(state: string, action: any) {
      state = action.payload;
      return state;
    },
  }, // 管理同步方法，必须是纯函数
  effects: {}, // 管理异步操作，采用了 generator 的相关概念
  subscriptions: {}, // 订阅数据源
};

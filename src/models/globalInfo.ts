/*
 * @Descripttion: 全局共享的数据信息
 * @Author: JayShen
 * @Date: 2021-11-03 10:48:09
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-08 17:08:56
 */
interface State {
  userInfo: any;
}
export default {
  namespace: 'globalInfo', // 表示在全局 state 上的 key
  state: {
    userInfo: {
      name: '沈杰',
      age: 10,
      phone: 123,
    },
    lang: 'zh-CN',
    theme: {},
  },
  reducers: {
    // 登录信息
    setUserInfo(state: string, action: any) {
      console.log(action);
      state.userInfo = action.payload;
      return state;
    },
    // 改变语言
    setLang(state: string, action: any) {
      state = action.payload;
      return state;
    },
    // 改变主题
    setTheme(state: string, action: any) {
      state = action.payload;
      return state;
    },
  }, // 管理同步方法，必须是纯函数
  effects: {}, // 管理异步操作，采用了 generator 的相关概念
  subscriptions: {}, // 订阅数据源
};

/*
 * @Descripttion:
 * @Author: JayShen
 * @Date: 2021-11-01 16:49:07
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-01 20:46:37
 */
let color;
if (typeof window === 'undefined') {
  color = 'green';
} else {
  color = localStorage.getItem('color');
}
export default {
  namespace: 'index', // 表示在全局 state 上的 key
  state: {
    color: color,
    // color: "#333"
  }, // 状态数据
  reducers: {
    setCount(state: string, action: any) {
      state = action.payload;
      return state;
    },
  }, // 管理同步方法，必须是纯函数
  effects: {}, // 管理异步操作，采用了 generator 的相关概念
  subscriptions: {}, // 订阅数据源
};

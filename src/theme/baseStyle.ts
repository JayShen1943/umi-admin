/*
 * @Descripttion:
 * @Author: JayShen
 * @Date: 2021-11-01 16:18:29
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-02 13:49:26
 */
import lessToJs from 'less-vars-to-js';
// import path from 'path';
// import fs from 'fs';
// import { useStore } from 'dva'
import state from '../models/index';
// const baseStyle = lessToJs(
//     fs.readFileSync(path.join(__dirname, './baseStyle.less'), 'utf8'),
// );

let baseStyle: String = state.state.color;
if (typeof window === 'undefined') {
  baseStyle = 'green';
} else {
  localStorage.setItem('color', baseStyle);
}
export default baseStyle;

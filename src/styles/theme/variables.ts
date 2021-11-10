/*
 * @Descripttion: less转ts文件
 * @Author: JayShen
 * @Date: 2021-11-10 10:57:18
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-10 11:08:20
 */
import lessToJs from 'less-vars-to-js';
import path from 'path';
import fs from 'fs';

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './baseStyle.less'), 'utf8'),
);
export default themeVariables;

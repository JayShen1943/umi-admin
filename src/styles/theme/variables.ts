/*
 * @Descripttion: less转ts文件
 * @Author: JayShen
 * @Date: 2021-11-10 10:57:18
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-20 20:10:03
 */
import lessToJs from 'less-vars-to-js';
import path from 'path';
import fs from 'fs';

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './variables.less'), 'utf8'),
);
export default themeVariables;

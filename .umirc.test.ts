/*
 * @Descripttion: 测试环境配置(打包)
 * @Author: JayShen
 * @Date: 2021-11-01 13:55:45
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-02 13:36:21
 */
import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    CURRENT_ENV: 'test',
    BASE_URL: 'testBase',
  },
});

/*
 * @Descripttion: 生产环境配置(打包)
 * @Author: JayShen
 * @Date: 2021-11-01 13:57:03
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-02 13:36:18
 */
import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    CURRENT_ENV: 'prod',
    BASE_URL: 'prodBase',
  },
});

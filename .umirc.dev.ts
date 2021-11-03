/*
 * @Descripttion: 本地环境配置（运行）
 * @Author: JayShen
 * @Date: 2021-11-01 13:57:56
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-02 13:55:22
 */
import { defineConfig } from 'umi';
const baseUrl = 'http://localhost:3000';
export default defineConfig({
  define: {
    CURRENT_ENV: 'dev',
    BASE_URL: baseUrl,
  },
  proxy: {
    '/apis': {
      target: baseUrl,
      pathRewrite: { '^/apis': '' },
      changeOrigin: true,
    },
  },
});

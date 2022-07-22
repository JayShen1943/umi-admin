/*
 * @Descripttion: 本地环境配置（运行）
 * @Author: JayShen
 * @Date: 2021-11-01 13:57:56
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-22 11:36:45
 */
import { defineConfig } from 'umi';
let baseUrl = '';
baseUrl = "http://localhost:8529"

export default defineConfig({
  define: {
    CURRENT_ENV: 'dev',
    BASE_URL: baseUrl,
  },
  proxy: {
    // 连接本地
    '/apis': {
      target: baseUrl,
      pathRewrite: { '^/apis': '' },
      changeOrigin: true,
      // secure: false, // https协议跳过验证
    },
  },
});

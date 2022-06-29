/*
 * @Descripttion: 本地环境配置（运行）
 * @Author: JayShen
 * @Date: 2021-11-01 13:57:56
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-29 13:14:17
 */
import { defineConfig } from 'umi';
let baseUrl = '';
// baseUrl = "https://www.jayshen1943.com"
baseUrl = "http://192.168.11.45:8529"
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
    },
    // 连接生产环境
    // '/apis': {
    //   target: baseUrl,
    //   pathRewrite: { '^/admin/apis': '' },
    //   changeOrigin: true,
    //   secure: false, // https协议跳过验证
    // },
  },
});

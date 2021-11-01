/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-10-30 09:54:40
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-01 09:31:56
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  targets: { //配置浏览器最低版本兼容ie11
    ie: 11
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  locale: {
    default: 'zh-CN'
  },
  antd: {},
  dva: {},
  "theme": {
    "primary-color": "#1DA57A",
  },
});

/*
 * @Descripttion:
 * @Author: JayShen
 * @Date: 2021-10-30 09:54:40
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-22 09:22:30
 */
import { defineConfig } from 'umi';
import Routes from './src/routers';
import path from 'path';
import variables from "./src/styles/variables"
export default defineConfig({
  devServer: {
    port: 6008
  },
  // 别名配置
  title: 'Deti Mes Admin',
  publicPath: './',
  nodeModulesTransform: {
    type: 'none',
  },
  // fastRefresh: {},
  locale: {
    default: 'zh-CN',
    antd: true, // ant国际化
    title: true, // 页面标题国际化
  },
  antd: {
    disableBabelPluginImport: true // 禁用按需引入
  },
  dva: {
    immer: true, // 方便修改 reducer
    hmr: true, // 热更新,
    // skipModelValidate: true
  },
  mfsu: {},
  metas: [
    {
      name: 'keywords',
      content: 'umi, umijs',
    },
  ],
  theme: variables,
  routes: Routes,
  chainWebpack(config: any) {
    // 用svg-sprite-loader制作 svg-symbol，让我们可以直接使用 svg-use。
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, './src/assets/svg')).end();  // 不包含的采用默认的 svg 规则 
    config.module.rule('image')
      .test(/\.svg$/i)
      .include.add(path.resolve(__dirname, './src/assets/svg')).end()
      .use('svg-sprite-loader')
      .loader(require.resolve('svg-sprite-loader'))
  }
});

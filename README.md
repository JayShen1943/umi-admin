<!--
 * @Descripttion: README
 * @Author: JayShen
 * @Date: 2022-06-20 08:47:00
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-24 13:26:21
-->

## project
name: deti-mes,
version: 1.0.0,
description: 得体智造前台,
author : JayShen,
Umi3.5 + React17.x + TypeScript4.1.2 + Antd4.0.0

## Build Setup

``` bash
# 安装依赖
yarn

# 开发模式启动 CURRENT_ENV=dev
yarn start

# 测试环境打包 CURRENT_ENV=test
yarn build:test

# 生产环境打包 CURRENT_ENV=prod
yarn build

# ESlint 检查错误并适当修复
yarn lint

```


## Directory tree

```
├── dist/                           // 默认的 build 输出目录
├── mock/                           // mock 文件所在目录，基于 express
└── src/							
    ├── layouts                     // 全局布局
    ├── locales                     // 国际化配置
    ├── assets                      // 静态资源
    ├── common                      // 公共组件
    ├── models                      // 全局 models
    ├── services                    // API接口
    ├── styles                      // 样式文件
    ├── utils                       // 工具文件
    ├── routers                     // 路由文件
    └── pages/                      // 页面目录
    ├── global.less                 // 自动引入的全局样式
├── .umirc.js                       // umi 配置
├── .eslintignore                   // eslint 忽略文件
├── .eslintrc.js                    // eslint 配置文件
├── .gitignore                      // git 忽略的文件
├── tsconfig.jso                    // ts 配置文件
├── package.json                    // npm 依赖记录文件
├── yarn.lock                       // yarn 版本锁定文件

```

## 路由缓存功能实现和问题

采用umi-plugin-keep-alive (https://github.com/alitajs/umi-plugin-keep-alive)

是基于react-activation。遇到如下问题访问 https://github.com/CJY0208/react-activation/blob/master/README_CN.md

1.Breaking Change 由实现原理引发的额外问题

2.对 Context 的破坏性影响

3.对依赖于 React 层级的功能造成影响

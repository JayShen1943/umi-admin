
## project
name: deti-cloud-web,
version: 1.0.0,
description: 得体云,
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
```

## Directory tree

```
├── dist/                           // 默认的 build 输出目录
├── mock/                           // mock 文件所在目录，基于 express
└── src/							
    ├── layouts                     // 全局布局
    ├── locales                     // 国际化配置
    ├── assets                      // 静态资源
    ├── components                  // 公共组件
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
├── .prettierignore                 // Prettier 忽略的文件
├── .prettierrc.js                  // Prettier 代码格式化配置文件 
├── tsconfig.jso                    // ts 配置文件
├── package.json                    // npm 依赖记录文件
├── yarn.lock                       // yarn 版本锁定文件

```


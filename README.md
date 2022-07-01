<!--
 * @Descripttion: README
 * @Author: JayShen
 * @Date: 2022-06-20 08:47:00
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-01 14:50:33
-->

## project
name: deti-mes

version: 1.0.0

description: 得体智造前台

author: JayShen

frame: 3.5 + React 17.x

lang：React Hooks + TypeScript

componentLibrary: Ant Design 4.21.3

css: Less

dataManagement：dva 

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
        ├── globalConfig.ts         // 全局配置
    ├── locales                     // 国际化配置
    ├── assets                      // 静态资源
        ├── image                   // 存放图片
        ├── svg                     // 存放.svg
    ├── common                      // 公共组件
    ├── models                      // 全局 models
    ├── services                    // API接口
    ├── styles                      // 样式文件
    ├── utils                       // 实用程序
        ├── authRouter.ts           // 路由守卫
        ├── request.ts              // 网络请求umi-request
        ├── errorHandler.ts         // 请求错误处理
        ├── formatSign.ts           // 请求头验签
        ├── theme.ts                // 主题修改
        ├── tools.ts                // 函数工具
        ├── preventRequest.ts       // 重复请求限制
        ├── ...
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


## 注意事项（必读）
### 1.yarn
依赖安装和启动命令都采用yarn
### 2.TS any
虽然目前没有禁止any的使用，但不得滥用any，在知道类型的情况下务必定义。

### 3.命名规范
- less/css文件名：小驼峰
- 样式 className/class：全小写，用-连接符或者__ ，采用BEM规范
- ts/tsx文件名：普通页面、路由用小驼峰、组件用大驼峰
- js/ts/tsx方法名：函数用小驼峰、class类用大驼峰
- interface用I开头大驼峰如：IProps
- type用T开头大驼峰如：TProps
- 地址栏url：小驼峰
- 其他语法遵循ESlint规范
### 4.CSS Modules
less书写规范：
- react没有vue的scope属性，故className命名不得重复，采用BEM规范
- 使用css modules开发模式，尽量不写内联样式，
- 主色调、文字尺寸、边框圆角等属性一律使用全局less变量，方便后期一键替换。路径：@/src/styles/theme.less 和@/src/styles/variables.less

less 文件命名: 
  - xxx.module.less

less文件引入和使用
  - import style from "./demo.module.less"
  - className={style.demo} or className={style['demo']}

### 5.icon.svg引入
本次项目摒弃iconfont而采用svg作为icon资源，务必放在@/src/assets/svg 下。

通用组件：@/src/common/SvgIcon 可以自动引入svg路径 只需要填写正确name即可使用

svg代码压缩：https://www.zhangxinxu.com/sp/svgo/ （可以大幅度减少代码体积）

### 6.路由缓存功能实现和问题

采用umi-plugin-keep-alive (https://github.com/alitajs/umi-plugin-keep-alive)

是基于react-activation。遇到如下问题访问 https://github.com/CJY0208/react-activation/blob/master/README_CN.md

1. Breaking Change 由实现原理引发的额外问题

2. 对 Context 的破坏性影响

3. 对依赖于 React 层级的功能造成影响


### 7.请求重复拦截 openPreventRequest
以request入参为准，get请求下默认为flase，post请求下默认为true。
例：
```ts
 export const demo = (params: any) => {
  return request(`demo`, {
    method: 'get',
    data: params,
    openPreventRequest: true // 开启重复拦截
  });
};   
```

### 8.ESlint
项目启用了eslint代码规范，根据日常开发逐步完善eslintrc.js文件（不得私自修改），为防止eslint触发过于频繁导致卡顿和影响开发效率，所以在git commit 时被动触发eslint ，主动触发也可以直接输入命令 yarn lint ，若不解决终端打印的error或者warning 将无法提交代码！

### 9.异步请求错误返回
报错处理统一在@/src/utils/errorHandler.ts，无需再在业务代码里抛出message。
### 10.Example Page
1. dva数据管理、国际化使用、公共组件使用示例： src/page/demo.tsx 
2. react实现keepAlive示例： src/page/keepAliveDemo.tsx

### 11.dva使用注意！！！
获取/修改 dva大致分两种用法：
#### 1.使用connect连接，props内部获取和改变数据
```ts
import { connect } from 'umi';
const Demo = (props: any) => {
  const { dispatch } = props;
  dispatch({
    type: 'global/setPrimaryColor',
    payload: '#1890FF'
  });
export default connect((all) => all)(Demo);
}
```
#### 2.使用提供的hooks直接获取 避免connect写法(推荐)
踩坑：useStore 不是响应性的！！！ 全部使用useSelector即可
```ts
import { useStore, useSelector } from 'umi';
  const Demo = (props: any) => {
  const dispatch = useDispatch();
  const state = useStore(); // 避免用这种
  const store2 = useSelector(state => state) // 用这种
  dispatch({
    type: 'global/setPrimaryColor',
    payload: '#1890FF'
  });
export default Demo;
}
```
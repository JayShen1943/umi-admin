/*
 * @Descripttion: TS全局声明
 * @Author: JayShen
 * @Date: 2021-10-30 09:54:40
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-28 14:23:04
 */
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
// 声明当前的环境
declare const CURRENT_ENV: 'dev' | 'test' | 'pord';
// 声明当前的请求路径
declare const BASE_URL: string;
// less-> js
declare module 'less-vars-to-js';

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// declare function createContext(defaultValue?: () => void): any
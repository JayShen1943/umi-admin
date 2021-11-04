/*
 * @Descripttion:
 * @Author: JayShen
 * @Date: 2021-10-30 09:54:40
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-04 11:18:53
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
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
// react实现keepAlive插件
declare module 'react-keepalive-router';

/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-10-30 09:54:40
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-01 11:56:52
 */
import styles from './index.less';
let a: number = 123
let b = 1231
var d = 'a'
var s
import Demo from "./demo"
import ClassDemo from "./ClassDemo"
export default function IndexPage() {
  return (
    <div>
      {a}
      <Demo />
      <ClassDemo />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

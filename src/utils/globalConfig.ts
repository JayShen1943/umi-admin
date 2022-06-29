/*
 * @Descripttion: 全局配置
 * @Author: JayShen
 * @Date: 2022-06-28 11:03:57
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-28 11:06:32
 */
import { message } from 'antd';
const globalConfig = () => {
    // antd-message设置
    message.config({
        top: 8,
        duration: 2,
        maxCount: 1,
    });
}
export default globalConfig
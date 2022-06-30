/*
 * @Descripttion: 全局配置
 * @Author: JayShen
 * @Date: 2022-06-28 11:03:57
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-30 17:01:13
 */
import { message, notification } from 'antd';
const globalConfig = () => {
    // antd-message设置
    message.config({
        top: 8,
        duration: 2,
        maxCount: 1,
    });
    // notification设置
    notification.config({
        bottom: 24,
        duration: 2,
        maxCount: 2,
    });
}
export default globalConfig
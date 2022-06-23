/*
 * @Descripttion: 路由守卫
 * @Author: JayShen
 * @Date: 2022-06-22 17:58:44
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-23 14:15:26
 */
// import { useLocation } from 'umi';
import { clearRequestMap } from "@/utils/preventRequest"
export default (props: any) => {
    // const location = useLocation()
    // 切换路由时清空接口list
    clearRequestMap()
    return <div>{props.children}</div>
}
/*
 * @Descripttion: 路由守卫
 * @Author: JayShen
 * @Date: 2022-06-22 17:58:44
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-28 11:17:18
 */
// import { useLocation } from 'umi';
import { clearRequestMap } from "@/utils/preventRequest"
interface Iprops {
    children: any
}
export default (props: Iprops) => {
    // const location = useLocation()
    // 切换路由时清空接口list
    clearRequestMap()
    return <div>{props.children}</div>
}
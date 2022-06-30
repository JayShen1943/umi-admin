/*
 * @Descripttion: 路由守卫
 * @Author: JayShen
 * @Date: 2022-06-22 17:58:44
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-30 17:58:36
 */
// import { useLocation } from 'umi';
import { clearRequestMap } from "@/utils/preventRequest"
import { signOut, getToken } from "@/utils/tools"
import { useEffect } from "react";
interface Iprops {
    children: any
}
export default (props: Iprops) => {
    // 判断是否登录
    useEffect(() => {
        if (!getToken()) {
            signOut()
        }
    }, [])
    // 切换路由时清空接口list
    clearRequestMap()
    return <div>{props.children}</div>
}
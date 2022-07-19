/*
 * @Descripttion: 路由守卫
 * @Author: JayShen
 * @Date: 2022-06-22 17:58:44
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-19 13:45:09
 */
import { clearRequestMap } from "@/utils/preventRequest"
import { signOut, getToken } from "@/utils/tools"
import { useEffect } from "react";
import { history } from "umi"
interface Iprops {
    children: any
}
export default (props: Iprops) => {
    // 判断是否登录
    useEffect(() => {
        if (!getToken()) {
            signOut()
        } else {
            // 判断是否根据修改地址栏进行的跳转
            let reloadType = null;
            try {
                reloadType = window.performance.navigation.type;
            } catch (err) {
                reloadType = 1;
            }
            if (reloadType === 0) {
                history.push('/demo')
            }
        }
    }, [])
    // 切换路由时清空接口list
    clearRequestMap()
    return <div>{props.children}</div>
}
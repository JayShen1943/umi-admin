/*
 * @Descripttion: 全局接口数据统一返回 
 * @Author: JayShen
 * @Date: 2022-06-29 18:32:25
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-18 11:59:13
 */
/* eslint-disable */
/** 全局接口数据统一返回 */
declare namespace API {
    /** 最外层返回 */
    type Response<T = any> = {
        code: number;
        data: T;
        message: string
    }
    /** 分页数组 */
    type PageList = {
        list: List;
        pageIndex: number;
        pageSize: number
        total: number;
    }
    /** 数组 */
    type List = Array<Record<string, unknown>>
}


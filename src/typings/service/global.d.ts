/*
 * @Descripttion: 全局接口数据统一返回 
 * @Author: JayShen
 * @Date: 2022-06-29 18:32:25
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-14 16:07:53
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
        list: Array<any>;
        pageIndex: number;
        pageSize: number
        total: number;
    }
}

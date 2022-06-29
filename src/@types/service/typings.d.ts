/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2022-06-22 09:20:45
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-29 18:31:16
 */
/* eslint-disable */
declare namespace API {
    // 最外层返回
    type Response<T = any> = {
        code: 200 | 404;
        data: T;
        message: string
    }
    // 分页数组
    type PageList = {
        list: Array<any>;
        pageIndex: number;
        pageSize: number
        total: number;
    }
}   
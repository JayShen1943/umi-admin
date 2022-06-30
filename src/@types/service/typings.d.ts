/* eslint-disable */
declare namespace API {
    // 最外层返回
    type Response<T = any> = {
        code: number;
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
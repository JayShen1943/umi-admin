/*
 * @Descripttion: request错误处理
 * @Author: JayShen
 * @Date: 2022-06-22 15:56:57
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-29 17:00:37
 */
import { notification } from 'antd';
import {
    clearRequestMap
} from "@/utils/preventRequest"
// codeMessage仅供参考 具体根据和后端协商,在详细定义.
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    500: '服务器发生错误，请检查服务器。',
    404: '路径错误',
};
type mapCode = 200 | 400 | 500 | 404;
type Error = {
    name?: string
    message?: string
    response: any
}
// { response: Response }
const errorHandler = (error: Error): Response => {
    const { response } = error;
    // 拦截重复请求
    if (error.name === "repeatRequest") {
        /* eslint-disable */
        console.error(error.message);
        return response
    }
    if (response && response.status) {
        let errorText =
            codeMessage[response.status as mapCode] || response.statusText;
        const { status, url } = response;
        response
            ?.clone()
            ?.json()
            ?.then((res: any) => {
                // 后端返回错误信息,就用后端传回的
                errorText = res.message ? res.message : errorText;
                notification.error({
                    message: `请求错误 ${status}: ${url}`,
                    description: errorText,
                });
            });
    } else if (!response) {
        notification.error({
            description: '您的网络发生异常，无法连接服务器',
            message: '网络异常',
        });
    }
    clearRequestMap()
    return response;
};

export default errorHandler
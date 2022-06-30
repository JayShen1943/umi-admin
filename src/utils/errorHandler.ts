/*
 * @Descripttion: request错误处理
 * @Author: JayShen
 * @Date: 2022-06-22 15:56:57
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-30 13:45:08
 */
import { notification } from 'antd';
import {
    clearRequestMap
} from "@/utils/preventRequest"
import { signOut } from './tools';
// codeMessage仅供参考 具体根据和后端协商,在详细定义.
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    400: '请求参数不正确',
    401: '账号未登录',
    403: '没有该操作权限',
    404: '请求路径错误',
    405: '请求方法不正确',
    423: '请求失败，请稍后重试',
    429: '请求过于频繁，请稍后重试',
    500: '服务器发生错误，请检查服务器。',
    900: '重复请求，请稍后重试',
    901: '为保证账号安全，请重新登录',
    902: '您的账号在另一台设备登录',
    999: '未知错误',
};
type mapCode = 200 | 400 | 401 | 403 | 404 | 405 | 423 | 429 | 500 | 900 | 901 | 902 | 999;
type Error<T = any> = {
    name?: string
    code?: number
    message?: string
    status?: number
    response: T
}
// { response: Response }
const errorHandler = (error: Error): Error<Response> => {
    const { response, code, status } = error;
    // 拦截重复请求错误
    if (error.name === "repeatRequest") {
        /* eslint-disable */
        console.error(error.message);
        return error
    }
    // HTTP返回错误
    if ((response && response.status)) {
        let errorText =
            codeMessage[response.status as mapCode] || response.statusText;
        const { status } = response;
        response
            ?.clone()
            ?.json()
            ?.then((res: any) => {
                // 后端返回错误信息,就用后端传回的
                errorText = res.message ? res.message : errorText;
                notification.error({
                    // message: `请求错误 ${status}: ${url}`,
                    message: `${status || ''} ${errorText}`,
                });
            });
    } else if (code) {
        // 服务端返回错误
        const errorText =
            codeMessage[code as mapCode] || error.message || '您的网络异常，无法连接服务器';
        notification.error({
            message: `${errorText}`,
        });
        if (code === 901 || code === 902) {
            signOut()
        }
        return error
    } else {
        const errorText =
            codeMessage[status as mapCode] || '您的网络异常，无法连接服务器';
        notification.error({
            // description: errorText,
            message: `${status || ''} ${errorText}`,
        });
        return error
    }
    clearRequestMap()
    return response;
};

export default errorHandler
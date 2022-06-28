/*
 * @Descripttion: 拦截request重复工具
 * @Author: JayShen
 * @Date: 2022-06-21 16:12:27
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-28 12:09:25
 */
import qs from "qs"
import md5 from 'md5'
interface IOptions {
    openPreventRequest?: boolean;
    url?: string;
    data?: any
}
/**
 * 缓存请求的接口信息list
 */
const requestMap: string[] = []
/**
 * 获取请求信息
 * @param {Object} options
 */
const getRequestInfo = (options: IOptions): string => {
    const { url, data } = options
    const obj = {
        data,
        url: url,
    }
    const sign = md5(qs.stringify(obj)).toUpperCase();
    return sign
}

/**
 * 检查是不是重复请求
 * @param {Object} options
 */
const checkRepeatRequest = (options: IOptions): boolean => {
    const requestInfo = getRequestInfo(options)
    return requestMap.includes(requestInfo)
}

/**
 * 添加请求
 * @param {Object} options
 */
const addRequest = (options: IOptions): void => {
    if (!options.openPreventRequest) return
    const requestInfo = getRequestInfo(options)
    requestMap.push(requestInfo)
}

/**
 * 移除请求
 * @param {Object} options
 */
const removeRequest = (options: IOptions): void => {
    if (!options.openPreventRequest) return
    const requestInfo = getRequestInfo(options)
    const requestIndex = requestMap.indexOf(requestInfo)
    if (requestIndex > -1) {
        requestMap.splice(requestIndex, 1)
    }
}

/**
 * 清空请求数组
 */
const clearRequestMap = (): void => {
    if (requestMap.length) {
        requestMap.length = 0
    }
}

export {
    checkRepeatRequest,
    addRequest,
    removeRequest,
    clearRequestMap,
}

/*
 * @Descripttion: TS工具函数
 * @Author: JayShen
 * @Date: 2022-06-22 16:13:35
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-23 14:17:41
 */
import defaultImg from '@/assets/image/defaultImg.png'
/**
 * @Description: 函数防抖 (只执行最后一次点击)
 * @Author: JayShen
 * @param {*} fn
 * @param {*} delay
 */
// 箭头函数泛型写法1
// const demo: <T>(value: T) => T = value => {
//     return value
// }
// 箭头函数泛型写法2
// const f = <T1>(arg1: T1) => <T2>(arg2: T2) => {
//     return { arg1, arg2 };
// }
// 普通函数写法
// function print<T>(arg: T) {
//     console.log(arg)
//     return arg
// }

export const debounce = (fn: any, delay: number = 200, ...args: any[]) => {
    /* eslint-disable */
    let timer: NodeJS.Timeout | null
    return function (this: any): void {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            timer = null
            fn.apply(this, args)
        }, delay)
    }
}

/**
 * @Description: 函数节流
 * @Author: JayShen
 * @param {*} fn
 * @param {*} t
 */
export const throttle = (fn: any, delay: number = 200, ...args: any[]) => {
    /* eslint-disable */
    let last: number
    let timer: NodeJS.Timeout
    return function (this: any) {
        // const args = arguments
        const now = +new Date()
        if (last && now - last < delay) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                last = now
                fn.apply(this, args)
            }, delay)
        } else {
            last = now
            fn.apply(this, args)
        }
    }
}


/**
 * @Description: 无图缺省+减少尺寸优化性能(仅适用于UCloud)
 * @Author: JayShen
 * @param {*} path
 */
export const formatImg = (path: string): string => {
    if (!path) {
        return defaultImg
    }
    if (path.lastIndexOf('?') !== -1 && path.lastIndexOf('=') !== -1) {
        return path + '&iopcmd=thumbnail&type=11&width=100&height=100'
    } else {
        return path + '?iopcmd=thumbnail&type=11&width=100&height=100'
    }
}
/**
 * @Description:  缺省数据显示 '-'
 * @Author: JayShen
 * @param {*}
 */
export const tranNull = (value: any) => {
    if (value === null || value === undefined || value === '' || value === 'null') return '--'
    return value
}
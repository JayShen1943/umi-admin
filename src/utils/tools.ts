/*
 * @Descripttion: TS工具函数
 * @Author: JayShen
 * @Date: 2022-06-22 16:13:35
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-22 11:40:08
 */
import JSEncrypt from 'jsencrypt';
import defaultImg from '@/assets/image/defaultImg.png'
import { history } from 'umi';
// import { useEffect, useCallback, useRef } from 'react';

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


/**
 * @Description: 原生ts防抖
 * @Author: JayShen
 * @param func
 * @param delay 
 */
/* eslint-disable */
export function debounce<T extends unknown[]>(func: (...args: T) => void, delay: number = 200): (...args: T) => void {
    let timer: NodeJS.Timeout | null
    return (...args: T) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            // 在非严格模式下当我们第一个参数传递为null或undefined时，函数体内的this会指向默认的宿主对象，在浏览器中则是window
            func.call(null, ...args);
        }, delay);
    };
}

/**
 * @Description: 原生ts节流
 * @Author: JayShen
 * @param func
 * @param delay 
 */
/* eslint-disable */
export function throttle<T extends unknown[]>(func: (...args: T) => void, delay: number = 200): (...args: T) => void {
    let last: number
    let timer: NodeJS.Timeout
    return (...args: T) => {
        const now = +new Date()
        if (last && now - last < delay) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                last = now
                func.call(null, ...args);
            }, delay)
        } else {
            last = now
            func.call(null, ...args);
        }
    }
}

/**
 * @Description: hooks防抖(可用，但参数提示不够完善)
 * @Author: JayShen
 * @param {*} fn
 * @param {*} delay
 */
// export function useDebounce(fn: any, delay: number = 200, dep: any[] = []) {
//     const { current } = useRef<any>({ fn, timer: null });
//     useEffect(function () {
//         current.fn = fn;
//     }, [fn]);

//     return useCallback(function f(this: any, ...args) {
//         if (current.timer) {
//             clearTimeout(current.timer);
//         }
//         current.timer = setTimeout(() => {
//             current.fn.call(this, ...args);
//         }, delay);
//     }, dep)
// }

/**
 * @Description: hooks节流(可用，但参数提示不够完善)
 * @Author: JayShen
 * @param {*} fn
 * @param {*} delay
 */
// export function useThrottle(fn: any, delay: number = 200, dep: any[] = []) {
//     const { current } = useRef<any>({ fn, timer: null })
//     useEffect(function () {
//         current.fn = fn;
//     }, [fn]);
//     return useCallback(function f(this: any, ...args) {
//         if (!current.timer) {
//             current.timer = setTimeout(() => {
//                 delete current.timer
//             }, delay)
//             current.fn.call(this, ...args)
//         }
//     }, dep)
// }


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
 * @Description: 缺省数据显示 '-'
 * @Author: JayShen
 * @param {*}
 */
export const tranNull = (value: any) => {
    if (value === null || value === undefined || value === '' || value === 'null') return '--'
    return value
}
/**
 * @Description: rsa公钥加密
 * @Author: JayShen
 * @param {*}
 */
export const rsaEncrypt = (data: string): string | boolean => {
    const publicKey = `放自己项目的公钥 没有就不使用这个方法`;
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    const encrypted = encrypt.encrypt(data);
    return encrypted;
};

/**
 * @Description: 清除Token缓存 退出登录
 * @Author: JayShen
 * @param {*}
 */
export const signOut = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    history.replace('/login');
}

/**
 * @Description: 判断是否有token
 * @Author: JayShen
 * @param {*}
 */
export const getToken = (): string | null => {
    const token = localStorage.getItem('token');
    return token
}

/**
 * @Description: 根据环境判断接口是否携带前缀(用于本地代理跨域)
 * @Author: JayShen
 * @param {*}
 */
export const apiPrefix = (): string => {
    const apis = CURRENT_ENV === 'dev' ? '/apis' : '';
    return apis
}
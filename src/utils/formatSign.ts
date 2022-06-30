/*
 * @Descripttion: sign验签
 * @Author: JayShen
 * @Date: 2022-06-24 10:55:05
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-30 13:39:20
 */
import md5 from "md5";

export default {
    objKeySort(obj: any) {
        //排序的函数
        //因为Array的sort()方法默认把所有元素先转换为String再排序，故'10'会排在'2'的前面，因为字符'1'比字符'2'的ASCII码小
        const newkey = Object.keys(obj).sort((x, y) => {
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        }); //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序
        const newObj = {} as any;
        for (let i = 0; i < newkey.length; i++) {
            newObj[newkey[i]] = obj[newkey[i]];
        }
        return newObj;
    },

    disposeSign(obj: any) {
        // obj.timestamp = new Date().getTime()
        const sortData = this.objKeySort(obj);
        const dataList = [] as any
        let dataString = "";
        let sign = "";
        Object.keys(sortData).forEach((key) => {
            // 判断是否是引用类型
            if (typeof sortData[key] === 'object') {
                // 判断是否是数组
                if (Array.isArray(sortData[key])) {
                    if (sortData[key].length) {
                        if (sortData[key] !== null) {
                            dataList.push(key + "=" + JSON.stringify(sortData[key]))
                        }
                    }
                } else {
                    if (JSON.stringify(sortData[key]) !== "{}") {
                        if (sortData[key] !== null) {
                            dataList.push(key + "=" + JSON.stringify(sortData[key]))
                        }
                    }
                }
            } else {
                if (sortData[key] !== '' && sortData[key] !== null && sortData[key] !== undefined) {
                    dataList.push(key + "=" + sortData[key])
                }
            }
        })
        dataList.forEach((item: string) => {
            dataString += item + "&"
        })
        // 增加盐值
        dataString =
            dataString.substr(0, dataString.length - 1) + "&salt=detimesmicro666";
        // md5加密
        sign = md5(dataString).toUpperCase();
        return sign;
    },
}
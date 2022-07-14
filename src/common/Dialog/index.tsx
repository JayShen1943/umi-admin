/*
 * @Descripttion: 二次封装-Antd弹窗
 * @Author: JayShen
 * @Date: 2022-07-11 16:48:38
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-14 15:44:47
 */
import React from "react"
import { Modal, Button } from 'antd'
import type { ModalProps } from 'antd'
import style from "./index.module.less"
import { debounce } from '@/utils/tools'
// 额外新增props
type TProps = {
    /** 确定按钮是否可见 */
    okVisible?: boolean;
    /** 取消按钮是否可见 */
    cancelVisible?: boolean;
}
const Dialog: React.FC<ModalProps & TProps> = (props) => {
    const {
        okText = '确定',
        maskClosable = false,
        cancelText = '取消',
        okVisible = true,
        cancelVisible = true,
    } = props
    return (
        <Modal className={style.dialog}  {...props} maskClosable={maskClosable} footer={
            <div className={style.footer}>
                {
                    okVisible && (
                        <Button type="primary" onClick={props.onOk ? debounce((props.onOk), 200) : undefined} loading={props.confirmLoading}>{okText}</Button>
                    )
                }
                {
                    cancelVisible && (
                        <Button onClick={props.onCancel}>{cancelText}</Button>
                    )
                }
            </div>
        }>
            {props.children}
        </Modal >
    )
}
export default Dialog

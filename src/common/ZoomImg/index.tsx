/*
 * @Descripttion: 图片展示、可点击放大
 * @Author: JayShen
 * @Date: 2022-06-24 11:28:49
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-18 13:30:47
 */
import React, { useState } from "react";
import { Image, message } from 'antd';
import classNames from 'classnames';
import style from "./index.module.less"
import defaultImg from '@/assets/image/defaultImg.png'
interface ZoomImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /** 是否为文字 */
    isText?: boolean;
    /** 单张图片地址 */
    src?: string;
    /** 多张图片地址 */
    srcList?: string[];
    width?: number;
    heigth?: number;
    /** 圆角 */
    radius?: number
    /** 类名 */
    className?: string
    /** 图片描述 */
    alt?: string
    /** margin */
    marginGroup?: string;
    color?: string
}
const ZoomImg: React.FC<ZoomImgProps> = ({ isText = false, src, width = 160, heigth, radius = 4, srcList = [], alt, className, children, marginGroup = '0px', color = '#4389f1' }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const showVisible = () => {
        if (src) {
            setVisible(true)
        } else {
            message.warning('当前没有可预览的图片')
        }
    }
    return (
        <div style={{ margin: marginGroup }} className={style["zoom-img-warp"]}>
            {
                isText ? (
                    <span onClick={() => showVisible()} className={style.text} style={{ color: color }}>
                        {children}
                    </span>
                ) : (
                    <>
                        <Image
                            preview={{ visible: false }}
                            rootClassName={classNames(style['zomm-img'], className)}
                            width={width}
                            height={heigth}
                            src={src}
                            alt={alt}
                            fallback={defaultImg}
                            onClick={() => showVisible()}
                            style={{ borderRadius: radius && `${radius}px` }}
                        />
                    </>
                )
            }
            {
                visible && (
                    <div className={style['preview-warp']}>
                        {
                            <Image.PreviewGroup preview={{
                                visible, onVisibleChange: (vis) => setVisible(vis)
                            }}>
                                {srcList && srcList.length ? (
                                    srcList.map((item: string, index: number) => {
                                        return <Image src={item} key={index} />
                                    })
                                ) : <Image src={src} />
                                }
                            </Image.PreviewGroup>
                        }
                    </div>
                )
            }

        </div>
    )
}
export default ZoomImg
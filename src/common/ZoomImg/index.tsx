/*
 * @Descripttion: 图片展示、可点击放大
 * @Author: JayShen
 * @Date: 2022-06-24 11:28:49
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-24 18:06:32
 */
import React, { useState } from "react";
import { Image } from 'antd';
import classNames from 'classnames';
import "./index.less"

interface ZoomImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    isText?: boolean; // 是否为文字
    src?: string; // 图片地址
    srcList?: string[];
    width?: number;
    heigth?: number;
    radius?: number //圆角
    className?: string // 类名
    alt?: string // 图片描述
    marginGroup?: string; // margin
    children?: any
}
const ZoomImg: React.FC<ZoomImgProps> = ({ isText = false, src, width = 160, heigth, radius = 4, srcList = [], alt, className, children, marginGroup = '0px' }) => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div style={{ margin: marginGroup, display: 'inline-block' }}>
            {
                isText ? (
                    { children }
                ) : (
                    <>
                        <Image
                            preview={{ visible: false }}
                            rootClassName={classNames('zomm-img', className)}
                            width={width}
                            height={heigth}
                            src={src}
                            alt={alt}
                            fallback=''
                            onClick={() => setVisible(true)}
                            style={{ borderRadius: radius && `${radius}px` }}
                        />
                        {
                            visible && (
                                <div style={{ display: 'none' }}>
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
                    </>
                )
            }

        </div>
    )
}
export default ZoomImg
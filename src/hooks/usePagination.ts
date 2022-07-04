/*
 * @Descripttion: 自定义hooks-分页跳转
 * @Author: JayShen
 * @Date: 2022-02-10 15:53:12
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-04 14:13:10
 */
import { useState } from 'react';
const usePagination = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageTotal, setPageTotal] = useState<number>(0);

  const onchange = (current: number) => {
    setPageIndex(current);
  };

  const onShowSizeChange = (current: number, pageSize: number) => {
    setPageIndex(1);
    setPageSize(pageSize);
  };
  const showTotal = `共 ${pageTotal} 条`

  /**
   * pagination分页参数（仅在antd table使用）
   */
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: false,
    showTotal: () => showTotal,
    pageSize: pageSize,
    total: pageTotal,
    onChange: (current: number) => onchange(current),
    onShowSizeChange: (current: number, pageSize: number) => {
      onShowSizeChange(current, pageSize);
    },
  };

  return {
    pageSize, // 每页展示条数
    pageIndex,// 当前页
    pageTotal,// 总条数
    setPageIndex,// 当前页赋值
    setPageTotal,// 总条数赋值
    onchange,// 翻页
    onShowSizeChange,// 更改每页展示条数
    showTotal,// 总数展示文案
    paginationProps,// antd 表格组件所用
  };
};
export default usePagination;

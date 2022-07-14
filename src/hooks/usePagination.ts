/*
 * @Descripttion: 自定义hooks-分页跳转
 * @Author: JayShen
 * @Date: 2022-02-10 15:53:12
 * @LastEditors: JayShen
 * @LastEditTime: 2022-07-14 14:11:55
 */
import { useState } from 'react';
const usePagination = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [current, setCurrent] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const onchange = (current: number) => {
    setCurrent(current);
  };

  const onShowSizeChange = (current: number, pageSize: number) => {
    setCurrent(1);
    setPageSize(pageSize);
  };
  const showTotal = `共 ${total} 条`

  /**
   * pagination分页参数（仅在antd table使用）
   */
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: false,
    showTotal: () => showTotal,
    pageSize: pageSize,
    total: total,
    onChange: (current: number) => onchange(current),
    onShowSizeChange: (current: number, pageSize: number) => {
      onShowSizeChange(current, pageSize);
    },
  };

  return {
    /** 分页器参数合集 */
    pagination: {
      /** 每页展示条数 */
      pageSize,
      /** 当前页 */
      current,
      /** 总条数 */
      total,
      /** 当前页赋值 */
      setCurrent,
      /** 总条数赋值 */
      setTotal,
      /** 翻页 */
      onchange,
      /** 更改每页展示条数 */
      onShowSizeChange,
      /** 总数展示文案 */
      showTotal,
    },
    /** Antd表格组件所用 */
    paginationProps,

  };
};
export default usePagination;

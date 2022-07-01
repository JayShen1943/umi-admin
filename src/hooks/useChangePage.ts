/*
 * @Descripttion: 自定义hooks-分页跳转
 * @Author: JayShen
 * @Date: 2022-02-10 15:53:12
 * @LastEditors: JayShen
 * @LastEditTime: 2022-02-10 16:35:15
 */
import { useState } from 'react';
const useChangePage = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageTotal, setPageTotal] = useState<number>(0);
  // 翻页
  const pageChange = (current: number) => {
    setPageIndex(current);
  };
  // 更改每页展示条数
  const onShowSizeChange = (current: number, pageSize: number) => {
    setPageIndex(1);
    setPageSize(pageSize);
  };
  // antd table：pagination分页参数
  const paginationProps = {
    showSizeChanger: true, //设置每页显示数据条数
    showQuickJumper: false,
    showTotal: () => `共 ${pageTotal} 条`,
    pageSize: pageSize,
    total: pageTotal, //数据的总的条数
    onChange: (current: number) => pageChange(current), //点击当前页码
    onShowSizeChange: (current: number, pageSize: number) => {
      //设置每页显示数据条数，current表示当前页码，pageSize表示每页展示数据条数
      onShowSizeChange(current, pageSize);
    },
  };
  return {
    pageSize,
    pageIndex,
    pageTotal,
    setPageSize,
    setPageIndex,
    setPageTotal,
    pageChange,
    onShowSizeChange,
    paginationProps,
  };
};
export default useChangePage;

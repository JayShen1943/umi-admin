/*
 * @Descripttion: 各种demo范例
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2021-11-05 17:02:30
 */
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import { demoA } from '@/services';
import CommonBox from '@/components/CommonBox';
import {
  useIntl,
  setLocale,
  getLocale,
  KeepAlive,
  useActivate,
  useUnactivate,
} from 'umi';
interface List {
  username: String;
}
const Demo = (props: any) => {
  const [list, setList] = useState<List[]>([]);
  const intl = useIntl();
  const { dispatch } = props;
  const { color } = props.index;
  const [count, setCount] = useState(0);
  // const color = 'red';
  useEffect(() => {
    demoA({}).then(() => {
      console.log(111);
    });
  }, []);
  const clickDemo = () => {
    if (color === 'red') {
      dispatch({
        type: 'index/setCount', //指定哪个 model 层里面的哪个 方法
        payload: { color: '#333' },
        //需要传递到 model 层里面的参数。
      });
      localStorage.setItem('color', '#333');
    } else {
      dispatch({
        type: 'index/setCount',
        payload: { color: 'red' },
      });
      localStorage.setItem('color', 'red');
    }
  };
  // 语言切换
  const clickLang = () => {
    if (getLocale() === 'zh-CN') {
      setLocale('en-US', false);
    } else {
      setLocale('zh-CN', false);
    }
    console.log(getLocale());
  };
  return (
    <div>
      <CommonBox height="80px">
        <h1>dva数据管理:</h1>
        <button onClick={() => clickDemo()}>换颜色</button>当前颜色：{color}
      </CommonBox>
      <CommonBox marginGroup="30px 0px" height="80px">
        <h1>国际化:</h1>
        <button onClick={() => clickLang()}>换语言</button>
        {intl.formatMessage(
          { id: 'WELCOME_TO_UMI_WORLD' },
          {
            name: '变量：',
          },
        )}
      </CommonBox>
      <CommonBox height="100px">
        <h1>keepAlive缓存:</h1>
        <p>count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)} type="primary">
          Add
        </button>
      </CommonBox>
    </div>
  );
};
const Warp = (props: any) => {
  // saveScrollPosition="screen" 保存容器滚动位置
  return (
    <KeepAlive>
      <Demo {...props} />
    </KeepAlive>
  );
};
export default connect((index) => index)(Warp);

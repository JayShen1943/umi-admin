/*
 * @Descripttion: 各种demo范例
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-23 09:40:35
 */
import CommonBox from '@/components/CommonBox';
import { getArticleList } from '@/services';
import { useEffect, useState } from 'react';
import { getLocale, setLocale, useDispatch, useIntl, useStore, connect } from 'umi';
import { ReactComponent as Logo } from '@/assets/svg/dark.svg';
import { getTheme, setTheme } from "@/utils/theme"
import "./demo.less"
import { debounce, formatImg } from '@/utils/tools';
const Demo = (props: any) => {
  // const [list, setList] = useState<List[]>([]);
  const intl = useIntl();
  // connect写法
  const { dispatch } = props;

  // hooks写法 获取所有model
  const state = useStore();
  const dispatchHooks = useDispatch();
  const { color } = state.getState().index;
  const { userInfo } = state.getState().globalModel;
  const [active, setActive] = useState('light');
  const handleChange = (val: string) => {
    setActive(val === 'light' ? 'dark' : 'light');
    setTheme(val);
  };
  useEffect(() => {
    setTheme(active);
  }, [active]);
  useEffect(() => {
    // getData()
  }, []);

  const getData = debounce(() => {
    getArticleList({
      demo: 1,
      total: 'ss'
    }).then(() => { });
  }, 200)

  const clickDemo = () => {
    if (color === 'red') {
      dispatchHooks({
        type: 'index/setCount', //指定哪个 model 层里面的哪个 方法
        payload: { color: '#333' },
        //需要传递到 model 层里面的参数。
      });
      localStorage.setItem('color', '#333');
    } else {
      dispatchHooks({
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
  };
  const globalClick = () => {
    if (userInfo.name === '周杰伦') {
      dispatch({
        type: 'globalModel/setUserInfo',
        payload: {
          name: '张国荣',
          age: 40,
          phone: 888888,
        },
      });
    } else {
      dispatch({
        type: 'globalModel/setUserInfo',
        payload: {
          name: '周杰伦',
          age: 30,
          phone: 66666,
        },
      });
    }
  };
  return (
    <div>
      <CommonBox marginGroup="20px 0px">
        <img src={formatImg('')} alt="" />
        <button onClick={() => getData()}>调取接口</button>
      </CommonBox>
      <CommonBox marginGroup="20px 0px">
        <h1 className='demo-text'>主题变色：</h1>
        <button onClick={() => handleChange('light')}>换颜色1</button>
        <button onClick={() => handleChange('dark')}>换颜色2</button>
        <div>当前颜色：{getTheme()}</div>
      </CommonBox>
      <CommonBox height="80px">
        <Logo width={20} height={20} />
        <h1>dva数据管理:</h1>
        <button onClick={() => clickDemo()}>换颜色</button>当前颜色：{color}
      </CommonBox>
      <CommonBox marginGroup="20px 0px">
        <h1>dva数据管理（hooks）:</h1>
        <button onClick={() => globalClick()}>个人信息修改</button>
        <div>name：{userInfo.name}</div>
        <div>age：{userInfo.age}</div>
        <div>phone：{userInfo.phone}</div>
      </CommonBox>
      <CommonBox marginGroup="20px 0px" height="80px">
        <h1>国际化:</h1>
        <button onClick={() => clickLang()}>换语言</button>
        {intl.formatMessage(
          { id: 'WELCOME_TO_UMI_WORLD' },
          {
            name: '变量：',
          },
        )}
      </CommonBox>
    </div>
  );
};
const Warp = (props: any) => {
  // saveScrollPosition="screen" 保存容器滚动位置
  return (
    // <KeepAlive>
    <Demo {...props} />
    // </KeepAlive>
  );
};

// 写法一 ：
export default connect((index) => index)(Warp);

// 写法二
// export default connect(({ index, globalModel }: any) => ({
//   index,
//   globalModel,
// }))(Warp);

// 写法三
// function mapStateToProps(state: any) {
//   return {
//     color: state.index.color,
//     userInfo: state.globalModel.userInfo
//   };
// }
// export default connect(mapStateToProps)(Warp);

/*
 * @Descripttion: 各种demo范例
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2022-06-30 18:04:36
 */
import CommonBox from '@/common/CommonBox';
import { getObjTest } from '@/services';
import { getLocale, setLocale, useDispatch, useIntl, useStore, connect } from 'umi';
import style from "./demo.module.less"
import { debounce, formatImg } from '@/utils/tools';
import SvgIcon from '@/common/SvgIcon';
import ZoomImg from '@/common/ZoomImg';
import { Button, Input, Switch } from "antd"
const Demo = (props: any) => {
  const intl = useIntl();
  // connect写法
  const { dispatch } = props;
  // hooks写法 获取所有model
  const state = useStore();
  const dispatchHooks = useDispatch();
  const { color } = state.getState().index;
  const { userInfo } = state.getState().globalModel;
  const getData = debounce(() => {
    getObjTest({
      code: 0
    }).then((res) => {
      if (res.code === 200) {
      }
    });
  }, 0)

  const clickDemo = () => {
    if (color === '#1890ff') {
      dispatchHooks({
        type: 'index/setCount', //指定哪个 model 层里面的哪个 方法
        payload: { color: '#25b864' },
        //需要传递到 model 层里面的参数。
      });
      localStorage.setItem('color', '#25b864');
    } else {
      dispatchHooks({
        type: 'index/setCount',
        payload: { color: '#1890ff' },
      });
      localStorage.setItem('color', '#1890ff');
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
  const srcList = ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp']
  return (
    <div>
      <CommonBox marginGroup='20px 0px'>
        <Input defaultChecked />
        <Switch defaultChecked />
        <Switch size="small" defaultChecked />
        ZoomImg组件使用:
        <ZoomImg src={srcList[0]} marginGroup='0px 10px' isText={true} >
          <span className={style.view}>
            点击看图
          </span>
        </ZoomImg>
        <ZoomImg src={''} marginGroup='0px 10px' width={60} />
        <ZoomImg src={srcList[1]} srcList={srcList} width={160} />
      </CommonBox>
      <CommonBox marginGroup='20px 0px'>
        svg使用方式:
        <SvgIcon name='ceshi' />
      </CommonBox>
      <CommonBox marginGroup="20px 0px">
        <img src={formatImg('')} alt="" />
        <Button type='primary' onClick={() => getData()}>调取接口</Button>
      </CommonBox>
      <CommonBox marginGroup="20px 0px">
        <h1 className={style.view}>主题变色：</h1>
        <Button type='primary'>按钮</Button>
      </CommonBox>
      <CommonBox height="80px">
        <h1>dva数据管理:</h1>
        <Button onClick={() => clickDemo()}>换颜色</Button>当前颜色：{color}
      </CommonBox>
      <CommonBox marginGroup="20px 0px">
        <h1>dva数据管理（hooks）:</h1>
        <Button onClick={() => globalClick()}>个人信息修改</Button>
        <div>name：{userInfo.name}</div>
        <div>age：{userInfo.age}</div>
        <div>phone：{userInfo.phone}</div>
      </CommonBox>
      <CommonBox marginGroup="20px 0px" height="80px">
        <h1>国际化:</h1>
        <Button onClick={() => clickLang()}>换语言</Button>
        {intl.formatMessage(
          { id: 'WELCOME_TO_UMI_WORLD' },
          {
            name: '变量：',
          },
        )}
      </CommonBox>
      <CommonBox marginGroup="20px 0px" height="280px">
        123
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

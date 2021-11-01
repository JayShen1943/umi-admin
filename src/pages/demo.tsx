/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-10-30 10:25:49
 * @LastEditors: JayShen
 * @LastEditTime: 2021-10-30 10:59:30
 */
import { useEffect } from "react"
import { Layout, Menu } from 'antd';
const demo = () => {
    useEffect(() => {
        console.log('111111');
    })
    const { Header, Sider, Content } = Layout;
    return (
        <div>hooks组件
            <Layout>
                <Sider trigger={null} collapsible >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" >
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" >
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3">
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
export default demo
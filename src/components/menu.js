import React from 'react'
import {Layout, Menu, Icon, Button, Breadcrumb,} from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Show from './show'

const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        };

    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        trigger={null}
                    >
                        <div style={{background:'#000',height:'64px'}}/>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.state.collapsed}
                        >
                            <Menu.Item key="1">
                                <Icon type="pie-chart"/>
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop"/>
                                <span>Option 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="inbox"/>
                                <span>Option 3</span>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#000', padding: 0}}>
                            <Button type="primary" onClick={this.toggleCollapsed} style={{margin: 16}}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                            </Button>
                            <span style={{color:'#fff',fontSize:'16px'}}>这是一个菜单</span>
                        </Header>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                                <Switch>
                                    <Route path="/menu/show" component={Show}/>
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default menu
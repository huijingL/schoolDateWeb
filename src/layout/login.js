import React from 'react'
import { Button ,Card, Input} from 'antd';
import './login.css'

class Login extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return (
            <div className="loginBackground">
                <Card className="loginCard"
                      title={<span style={{color: 'aliceblue',}}>用户登录</span>}
                    extra={<a href="#">More</a>}
                    style={{ width: 400 }}
                >
                    <p><Input addonBefore="用户名：" defaultValue="" /></p>
                    <p><Input addonBefore="密码：" type="password" defaultValue="" /></p>
                    <p><Button type="primary" block>登录</Button></p>
                </Card>
            </div>
        )
    }

}

export default Login;
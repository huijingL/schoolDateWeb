import React from 'react'
import { Button ,Card, Input} from 'antd';
import './login.css'
import {withRouter} from "react-router-dom";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userName: 'liuyanwei',
            password: '',
            checkPassword: '',
            isLogin: true,
        }
    }
    dealInput = (e)=>{
        e.persist();
        this.setState(
            {
                [e.target.id]: e.target.value,
            }
        )
    };
    dealClick(e){
        e.persist()
        let methods = {
            login: function(){
                console.log("login");
            },
            regist: ()=>{
                if(this.state.checkPassword&&this.state.password&&this.state.checkPassword===this.state.password){
                    this.regist()
                }else{
                    console.log('error')
                }
            }
        }
        methods[e.target.id]&&methods[e.target.id]();
    };

    async regist(){
        console.log(this.$config.host);
        // let data = await this.$http.get(this.$config.host+this.$config.api.schema+"/bd_customer/",{params:{filter:{__s:0}}})
        // let data = await this.$http.get('http://127.0.0.1:5000')
        // console.log(data);
        this.props.history.push('/about')
    }
    render(){
        return (
            <div className="loginBackground">
                {this.state.isLogin ? (
                < Card className = "loginCard"
                    title={<span style={{color: 'aliceblue',}}>用户登录</span>}
                    extra={<a onClick={()=>{this.setState({isLogin: !(this.state.isLogin)})}}>More</a>}
                    style={{ width: 400 }}>
                    <p><Input addonBefore="用户名：" id="userName" onChange={this.dealInput} value={this.state.userName}/></p>
                    <p><Input.Password  addonBefore="密码：" id="password" onChange={this.dealInput} value={this.state.password} /></p>
                    <p><Button type="primary" id="login" onClick={this.dealClick.bind(this)}  block>登录</Button></p>
                </Card>
                ):(
                    < Card className = "loginCard"
                      title={<span style={{color: 'aliceblue',}}>用户注册</span>}
                    extra={<a onClick={()=>{this.setState({isLogin: !(this.state.isLogin)})}}>More</a>}
                    style={{ width: 400 }}>
                    <p><Input addonBefore="用户名：" id="userName" onChange={this.dealInput} value={this.state.userName}/></p>
                    <p><Input.Password  addonBefore="密码："  id="password" onChange={this.dealInput} value={this.state.password} /></p>
                    <p><Input.Password  addonBefore="确认密码："  id="checkPassword" onChange={this.dealInput} value={this.state.checkPassword} /></p>
                    <p><Button type="primary" id="regist" onClick={this.dealClick.bind(this)}  block>注册</Button></p>
                </Card>
                )
                }
            </div>
        )
    }
}

export default withRouter(Login);

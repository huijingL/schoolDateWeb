import React from 'react'
import {Button, Card, Input} from 'antd';
import './login.css'
import {withRouter,HashRouter as Router} from "react-router-dom";
import {instanceOf, PropTypes} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';

class Login extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: 'liuyanwei',
            password: '',
            checkPassword: '',
            isLogin: true,
        }
    }

    dealInput = (e) => {
        e.persist();
        this.setState(
            {
                [e.target.id]: e.target.value,
            }
        )
    };

    dealClick(e) {
        e.persist()
        let methods = {
            login: function () {
                console.log("login");
                this.props.history.push("/show")
            },
            regist: () => {
                if (this.state.checkPassword && this.state.password && this.state.checkPassword === this.state.password) {
                    this.regist()
                } else {
                    console.log('error')
                }
            }
        }
        methods[e.target.id] && methods[e.target.id]();
    };

    async regist() {
        const {cookies} = this.props;
        let res = await this.$http.post(this.$config.host + this.$config.api.schema + "/sys_user/", {
            username: this.state.userName,
            password: this.state.password
        });
        console.log(res);
        cookies.set('LOGIN_USER', res.data.rows[0]);
        this.props.history.push('/about')
    }

    render() {
        return (
            <Router>
                <div className="loginBackground">
                    {this.state.isLogin ? (
                        < Card className="loginCard"
                               title={<span style={{color: 'aliceblue',}}>用户登录</span>}
                               extra={<a onClick={() => {
                                   this.setState({isLogin: !(this.state.isLogin)})
                               }}>More</a>}
                               style={{width: 400}}>
                            <p><Input addonBefore="用户名：" id="userName" onChange={this.dealInput}
                                      value={this.state.userName}/></p>
                            <p><Input.Password addonBefore="密码：" id="password" onChange={this.dealInput}
                                               value={this.state.password}/></p>
                            <p><Button type="primary" id="login" onClick={this.dealClick.bind(this)} block>登录</Button>
                            </p>
                        </Card>
                    ) : (
                        < Card className="loginCard"
                               title={<span style={{color: 'aliceblue',}}>用户注册</span>}
                               extra={<a onClick={() => {
                                   this.setState({isLogin: !(this.state.isLogin)})
                               }}>More</a>}
                               style={{width: 400}}>
                            <p><Input addonBefore="用户名：" id="userName" onChange={this.dealInput}
                                      value={this.state.userName}/></p>
                            <p><Input.Password addonBefore="密码：" id="password" onChange={this.dealInput}
                                               value={this.state.password}/></p>
                            <p><Input.Password addonBefore="确认密码：" id="checkPassword" onChange={this.dealInput}
                                               value={this.state.checkPassword}/></p>
                            <p><Button type="primary" id="regist" onClick={this.dealClick.bind(this)} block>注册</Button>
                            </p>
                        </Card>
                    )
                    }
                </div>
            </Router>
        )
    }
}

export default withRouter(withCookies(Login));

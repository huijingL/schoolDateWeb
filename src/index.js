import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import Routers from './router/index';
import * as serviceWorker from './serviceWorker';
import config from './config/index';
import axios from './http/axios'

React.Component.prototype.$config = config;
React.Component.prototype.$http = axios;


ReactDOM.render((
    <Routers />
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

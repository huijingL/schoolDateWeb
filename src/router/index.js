import React from 'react'
import {  BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter} from "react-router-dom";
import About from "../components/about";
import App from "../App";
import Login from "../layout/login";

function routers() {
    let loginIn = false;
    return (
        <Router>
            <Route exact  path="/" render={()=> (
                loginIn ? (<Redirect to="Login"/>) : (<Login/>)
            )}/>
            <Route path="/Login" component={Login}/>
            <Route path="/about" component={About}>
            </Route>
        </Router>
    )
}

export default routers;
import React from 'react'
import {  BrowserRouter as Router,
    Route,
    Redirect} from "react-router-dom";
import About from "../components/about";
import Login from "../layout/login";
import Menu from "../components/menu"

function routers() {
    let loginIn = false;
    return (
        <Router>
            <Route exact  path="/" render={()=> (
                loginIn ? (<Redirect to="/login"/>) : (<Login/>)
            )}/>
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About}/>
            <Route path="/menu"  component={Menu}/>
        </Router>
    )
}

export default routers;
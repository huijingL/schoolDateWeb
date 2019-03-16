import React from 'react'
import {BrowserRouter  as Router, Route} from 'react-router-dom';
import About from "../components/about";
import App from "../App";

function routers() {
    return (
        <Router>
            <div>
                <Route path="/" component={App}/>
                <Route path="/about" component={About}>
                </Route>
            </div>
        </Router>
    )
}

export default routers;
import React from 'react'
import show from "./show";
import {BrowserRouter  as Router, Route} from 'react-router-dom';

function about(){
    return <div>
    about my test
        <Router>
        <Route path="/about/show" component={show}/>
        </Router>
    </div>
}

export default about;
import React from 'react'
// import { Router, Route, Link } from 'react-router'
// import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom';

class App extends React.Component{
    handleClick(event){
        this.props.history.push("/login");
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>click me!</button>
            </div>
        );
    }
}
export default withRouter(App);



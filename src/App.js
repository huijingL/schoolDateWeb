import React from "react";
import MyRouter from "./ReactRouter/index";
import "./App.css";
import Route from "./ReactRouter/Components/Route";
import Link from "./ReactRouter/Components/Link";
import Home from "./Pages/Home";
import School from "./Pages/School";

function App() {
  return (
    <div className="App">
      <MyRouter hash>
        123
        <p>
          <Link to="Home">Home</Link>
        </p>
        <p>
          <Link to="School">School</Link>
        </p>
        <Route path="Home" component={Home} />
        <Route path="School" component={School} />
      </MyRouter>
    </div>
  );
}

export default App;

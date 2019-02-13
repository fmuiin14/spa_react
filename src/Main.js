import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Goku from "./Goku";
import Bezita from "./Bezita";

class Main extends Component {
    render() {
        return(
            <HashRouter>
            <div>
                <h1>Dragon Ball Super</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/goku">Goku</NavLink></li>
                    <li><NavLink to="/bezita">Bezita</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/goku" component={Goku}/>
                    <Route path="/bezita" component={Bezita}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;
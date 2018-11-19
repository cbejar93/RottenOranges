import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions";

import Landing from "./Landing";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Post from "./Post";
class App extends Component {
    
    componentDidMount(){
        this.props.fetchUser()
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/home" component={Dashboard} />
                        <Route exact path="/post" component={Post} />
                    </div>            

                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);
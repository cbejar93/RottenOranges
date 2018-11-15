import React, {Component} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";


class Header extends Component {

    renderGoogle (){
            switch(this.props.auth){
                case null:
                    return ;
                case false:
                    return <li><a href="/auth/google">Login with Google</a></li>;
                default:
                    return <li><a href="/api/logout">Logout</a></li>;
            }
    }
    render () {
        // console.log(this.props);
        return (
            
                <nav>
                    <div className="nav-wrapper">
                        <Link
                            to={this.props.auth ? "/home": "/"}
                            className="brand-logo"
                        >Rotten Oranges</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderGoogle()}
                            {/* <li><a href="sass.html">Login With Google</a></li> */}
                            {/* <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li> */}
                        </ul>
                    </div>
                </nav>

        );
    }
}

function mapStateToProps (state){
    return { auth: state.auth}
}

export default connect(mapStateToProps)(Header); 

import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import {Link} from 'react-router';
class Header extends Component {

    userInfo(){
        if(this.props.userinfo){
            return (
                <li className="nav-item pull-xs-right" key={1}>
                    <Link className="nav-item nav-link" to="#">{this.props.userinfo.name}</Link>
                </li>
            );
        }
    }

    renderLinks(){
        if(this.props.authenticated){
            return[
                <li className="nav-item float-xs-left defaultColor" key={2}>
                    <Link className="nav-item nav-link defaultColor" to="/post/add">New Poll</Link>
                </li>,
                <li className="nav-item pull-xs-right defaultColor" key={3}>
                    <Link className="nav-item nav-link defaultColor" to="/logout">Logout</Link>
                </li>,

            ];
        }else{
            return [
                <li className="nav-item float-md-right defaultColor" key={2}>
                    <Link className="nav-link defaultColor" to="/register">&nbsp;Register</Link>
                </li>,
                <li className="nav-item float-md-right defaultColor" key={1}>
                    <Link className="nav-link defaultColor" to="/login">Login</Link>
                </li>
            ];
        }
    }

    render (){
        console.log(this.props.userinfo);
        return (

                <Navbar className="navbar sticky-top navbar-light bg-faded navbarStyle">
                <Link to="/" className="navbar-brand brandColor">Voting App</Link>
                    <Nav className="float-right" navbar>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                    {this.userInfo()}

                </ul>
                        </Nav>
                </Navbar>

        )

    }


}
function mapStateToProps(state){
    return {
        authenticated:state.auth.authenticated,
        userinfo:state.auth.userinfo
    };
}

export default connect(mapStateToProps)(Header)
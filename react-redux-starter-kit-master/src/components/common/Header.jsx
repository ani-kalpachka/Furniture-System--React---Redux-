import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        const { loggedIn, onLogout } = this.props;

        return (
            <header>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                {loggedIn && <a href="javascript:void(0)" onClick={onLogout}>Logout</a>}
                {loggedIn && <NavLink to="/create" activeClassName="active">Create Furniture</NavLink>}
                {loggedIn && <NavLink to="/details/:id" activeClassName="active">Details</NavLink>}
                {loggedIn && <NavLink to="/profile" activeClassName="active">Profile</NavLink>}
                {!loggedIn && <NavLink to="/login" activeClassName="active">Login</NavLink>}
                {!loggedIn && <NavLink to="/register" activeClassName="active">Register</NavLink>}
            </header>
        ); 
    }
}

export default Header;
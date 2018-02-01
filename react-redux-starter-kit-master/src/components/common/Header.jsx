import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        const { loggedIn, onLogout, items, users } = this.props;

        return (
            <header>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                        <div className="row">
                            {!loggedIn && <NavLink activeClassName="active" exact to="/">Home</NavLink>}
                            {loggedIn && <a href="javascript:void(0)" onClick={onLogout}>Logout</a>}
                            {loggedIn && <NavLink to="/create" activeClassName="active">Create Furniture</NavLink>}
                            {loggedIn && <NavLink to="/details/:id" activeClassName="active">Details</NavLink>}
                            {loggedIn && <NavLink to="/profile" activeClassName="active">Profile</NavLink>}
                            {!loggedIn && <NavLink to="/login" activeClassName="active">Login</NavLink>}
                            {!loggedIn && <NavLink to="/register" activeClassName="active">Register</NavLink>}
                            <span>{items} in the catalog</span>
                            <span>{users} registered users</span>
                        </div>
                    </div>
                </nav>
            </header>
        ); 
    }
}

export default Header;
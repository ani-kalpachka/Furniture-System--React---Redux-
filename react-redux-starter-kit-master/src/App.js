import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import CreatePage from './components/Create/CreatePage';
import ProfilePage from './components/Profile/ProfilePage';
import DetailsPage from './components/Details/DetailsPage';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/common/NotFound';
import Footer from './components/common/Footer';
import { connect } from 'react-redux';
import { logoutAction } from './actions/authActions';
import { furniture } from './data.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App"> 
                <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
                <main>
                    <Switch>
                        <Route exact path="/" render={() => <HomePage furniture={furniture}/> }/>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/create" component={CreatePage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route path="/details/:id" component={DetailsPage} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

function mapState(state) {
    return {};
}

function mapDispatch(dispatch) {
    return {
        logout: () => dispatch(logoutAction())
    };
}

export default withRouter(connect(mapState, mapDispatch)(App));
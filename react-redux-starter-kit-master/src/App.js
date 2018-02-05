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
        this.setState({loggedIn: false});
        this.props.logout();
        this.props.history.push('/');
    }

    componentWillmount() {
        if (localStorage.authToken) {
            this.setState({ loggedIn: true })
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.logginSuccess) {
            this.setState({loggedIn: true});
        }
    }

    render() {
        return (
            <div className="App"> 
                <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} items={0} users={0}/>
                <main>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/view/:page" render={() => <HomePage /> }/>
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
    return {
        logginSuccess: state.login.success
    };
}

function mapDispatch(dispatch) {
    return {
        logout: () => dispatch(logoutAction())
    };
}

export default withRouter(connect(mapState, mapDispatch)(App));
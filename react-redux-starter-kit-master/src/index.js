import React from 'react';
import ReactDOM from 'react-dom';
import './style/bootstrap.min.css';
import './style/site.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import {} from './actions/actionTypes';

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>), document.getElementById('root'));

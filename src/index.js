import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MainClass from './AppMain';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import giantReducer from './giantReducer'
//
var initState = {
    fetching: false,
    fetched: true,
    users: [],
    err: null

}
var middleware = applyMiddleware(thunk, logger)
const store = createStore(giantReducer, initState, middleware)

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))




registerServiceWorker();

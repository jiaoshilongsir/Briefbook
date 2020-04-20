import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import './statics/iconfont/iconfont.js'
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import {RootReducer} from './reducers/combine.js'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store=createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import About from './components/About'
import Repos from './components/Repos'
//import BasicExample from './router'
import { Provider } from 'react-redux';
//import {rootReducer} from './reducers'
import testReducer from './reducers'

import { createStore } from 'redux';

//ReactDOM.render(
//    <BasicExample />,
//  document.getElementById('root')
//);

//store

let store = createStore(testReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

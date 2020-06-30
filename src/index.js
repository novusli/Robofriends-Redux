import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, rootElement
    );
registerServiceWorker();

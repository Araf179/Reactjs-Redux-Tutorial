import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { createStore,combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import {searchRobots , requestRobots} from './reducers';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

//THis is needed to log our actions and our initial state
const logger = createLogger();

//We only have two reducers so we combine them to access
//Our initial states.
const rootReducers = combineReducers({requestRobots, searchRobots})

//Our store has our initial state and is the source of our state
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();

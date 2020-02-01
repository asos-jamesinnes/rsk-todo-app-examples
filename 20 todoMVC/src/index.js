import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Root from './Components/Root';
import {createStore} from 'redux';
import rootReducer from './Reducers';
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);



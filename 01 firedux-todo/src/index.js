import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import {configureStore} from 'redux-starter-kit';
import * as serviceWorker from './serviceWorker.js';

//configureStore is a simplification method from redux-starter-kit.
const store = configureStore ( {reducer: reducers} )
//Loads our app into the DOM
//The Provider component is required for the downstream components
//to be able to access the store.
  ReactDOM.render(
    <Provider store={store}>
      <App className = "Global" />
    </Provider>,
    document.getElementById('root')
  );
  serviceWorker.register();

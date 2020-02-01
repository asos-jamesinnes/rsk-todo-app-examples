import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-starter-kit';
import rootReducer from './store/reducers/index';

import './styles/global.scss';
import './styles/container.scss';
import './styles/flex.scss';

import App from './App';

const store = configureStore({
    reducer: rootReducer
});

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

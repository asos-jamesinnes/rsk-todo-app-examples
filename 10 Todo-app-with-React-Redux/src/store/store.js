import { configureStore } from 'redux-starter-kit';
import reducer from './reducer';

const store = configureStore({
    reducer,
    devTools: true
});

export default store;

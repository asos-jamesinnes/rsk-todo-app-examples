import {combineReducers} from 'redux';
import data from './data';

export default combineReducers({
  data
});
//This function combines reducers defined in data.js to one
//reducer for simplicity when calling Redux reducers.

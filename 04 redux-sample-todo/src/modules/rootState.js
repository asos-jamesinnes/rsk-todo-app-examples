import { combineReducers } from "redux-starter-kit";
import todosModule from "./todosModule";

export const rootReducer = combineReducers({
  todos: todosModule.reducer
});

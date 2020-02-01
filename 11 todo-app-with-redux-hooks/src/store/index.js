import { configureStore } from "redux-starter-kit";
import todosReducer from "../reducers/todos";
import visibilityFilterReducer from "../reducers/visibilityFilter";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer,
  },
});

export default store;

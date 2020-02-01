import { createAction, createReducer } from "redux-starter-kit";

const setVisibilityFilter = createAction("setVisibilityFilter");

const visibilityFilterReducer = createReducer("SHOW_ALL", {
  [setVisibilityFilter]: (state, action) => action.payload,
});

export default visibilityFilterReducer;

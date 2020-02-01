import '../actions/index.js';

export default (state = {}, action) => {
  switch(action.type) {
    case "FETCH_TODOS":
      return action.payload;
    default:
      return state;
  }
};
//In the case we're fetching todos, the action fetchToDos will dispatch
//the current db snapshot to this reducer. This reducer loads that snapshot
//into Redux State.

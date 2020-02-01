import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, TOGGLE_ALL_TODO, DELETE_COMPLETED_TODO, EDIT_TODO, GET_TODO, RESET_TODOS} from '../Actions/index'

const todos = (state=[], action) => {
  switch (action.type) {
    case RESET_TODOS:
      return [];  
    case GET_TODO:
      return [
        ...state,
        action.todo  
      ];
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: action.completed} : todo
      );
    case TOGGLE_ALL_TODO:
      return state.map(todo =>
        ({...todo, completed: action.completedAll})
      );
    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );
    case DELETE_COMPLETED_TODO:
      return state.filter(todo =>
        todo.completed === false
      );
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? {...todo, text: action.text}:todo
      );
    default:
      return state
  }
};

export default todos;
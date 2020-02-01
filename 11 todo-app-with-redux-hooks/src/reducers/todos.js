import { createAction, createReducer } from "redux-starter-kit";

let nextTodoId = 0;

const addTodo = createAction("todos/add");
const toggleTodo = createAction("todos/toggle");
const toggleAll = createAction("todos/toggleAll");
const clearCompletedTodo = createAction("todos/clearCompletedTodo");

const todosReducer = createReducer([], {
  [addTodo]: (state, action) => {
    const todo = {
      id: (nextTodoId += 1),
      text: action.payload.text,
      completed: false,
    };
    state.push(todo);
  },
  [toggleTodo]: (state, action) => {
    const index = action.payload;
    const todo = state[index];
    todo.completed = !todo.completed;
  },
  [toggleAll]: (state, action) => {
    const todos = state;
    todos.forEach((item) => {
      item.completed = action.payload.checked;
    });
    state = todos;
  },
  [clearCompletedTodo]: state => state.filter(item => item.completed === false),
});

export default todosReducer;

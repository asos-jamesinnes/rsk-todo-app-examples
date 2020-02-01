import { createSlice } from "redux-starter-kit";

const todoInitialState = {
  nextTodoId: 0,
  list: []
};

const todosModule = createSlice({
  slice: "todos",
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: state.nextTodoId++,
        text: action.payload,
        completed: false
      };
      state.list.push(todo);
    },

    toggleTodo: (state, action) => {
      const id = action.payload;
      state.list.forEach(todo => {
        todo.completed = todo.id === id ? !todo.completed : todo.completed;
      });
    }
  }
});

export default todosModule;

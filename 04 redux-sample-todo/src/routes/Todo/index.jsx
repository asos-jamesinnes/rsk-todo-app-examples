import React from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const Todo = () => {
  return (
    <div className="todo-section">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Todo;

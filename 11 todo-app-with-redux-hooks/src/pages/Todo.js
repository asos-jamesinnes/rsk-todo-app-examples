import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const Todo = () => {
  const todo = useSelector(state => state.todos);

  return (
    <div className="todoapp">
      <AddTodo />
      <TodoList />
      {todo.length > 0 ? <TodoFooter /> : null}
    </div>
  );
};
export default Todo;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { todoListSelector } from "../../../selectors/todoSelector";
import todosModule from "../../../modules/todosModule";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoListSelector);

  const toggleTodo = id => {
    dispatch(todosModule.actions.toggleTodo(id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: `${todo.completed ? "line-through" : "none"}`
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

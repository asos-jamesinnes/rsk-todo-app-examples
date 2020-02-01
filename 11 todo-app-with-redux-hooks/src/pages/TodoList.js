/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [allChecked, setAllChecked] = useState(false);
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const todo = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const toggleAll = () => {
    dispatch({
      type: "todos/toggleAll",
      payload: {
        checked: !isAllChecked(),
      },
    });
    setAllChecked(!allChecked);
  };
  const isAllChecked = () => todo.every(item => item.completed === true);
  const [mTodo, setMTodo] = useState([]);
  useEffect(() => {
    switch (visibilityFilter) {
      case "SHOW_ALL":
        setMTodo(todo);
        break;
      case "ACTIVE":
        setMTodo(todo.filter(item => item.completed === false));
        break;
      case "COMPLETED":
        setMTodo(todo.filter(item => item.completed === true));
        break;
      default:
        setMTodo(todo);
    }
  }, [todo, visibilityFilter]);

  return (
    <React.Fragment>
      <div className="main">
        {todo.length > 0 ? (
          <React.Fragment>
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              onChange={toggleAll}
              checked={isAllChecked()} />
            <label htmlFor="toggle-all">Mark all as complete</label>
          </React.Fragment>
        ) : null}

        <ul className="todo-list">
          {mTodo.map((item, index) => (
            <TodoItem item={item} key={item.id} itemIndex={index} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default TodoList;

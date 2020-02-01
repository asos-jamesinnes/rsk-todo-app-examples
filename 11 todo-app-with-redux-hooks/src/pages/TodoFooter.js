import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoFooter = () => {
  const todo = useSelector(state => state.todos);
  const filter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();

  const getNotCompletedLength = () => {
    let notCompletedLength = 0;
    todo.forEach((item) => {
      if (item.completed === false) {
        notCompletedLength += 1;
      }
    });
    return notCompletedLength;
  };

  const canShowClear = () => {
    let canShow = false;
    canShow = todo.some(item => item.completed === true);
    return canShow;
  };

  const clearCompleted = () => {
    dispatch({
      type: "todos/clearCompletedTodo",
    });
  };

  const setVisibilityFilter = (visibilityFilter) => {
    dispatch({
      type: "setVisibilityFilter",
      payload: visibilityFilter,
    });
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{getNotCompletedLength()}</strong>
        {" "}
item left
      </span>
      <ul className="filters">
        <li>
          <a
            className={`${filter === "SHOW_ALL" ? "selected" : null}`}
            href="#/"
            onClick={() => {
              setVisibilityFilter("SHOW_ALL");
            }}>
            All
          </a>
        </li>
        <li>
          <a
            className={`${filter === "ACTIVE" ? "selected" : null}`}
            href="#/active"
            onClick={() => {
              setVisibilityFilter("ACTIVE");
            }}>
            Active
          </a>
        </li>
        <li>
          <a
            className={`${filter === "COMPLETED" ? "selected" : null}`}
            href="#/completed"
            onClick={() => {
              setVisibilityFilter("COMPLETED");
            }}>
            Completed
          </a>
        </li>
      </ul>
      {canShowClear() ? (
        <button className="clear-completed" type="button" onClick={clearCompleted}>
          Clear completed
        </button>
      ) : null}
    </footer>
  );
};

export default TodoFooter;

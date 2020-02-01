import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const keyUp = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value) {
        setInputValue("");
        dispatch({
          type: "todos/add",
          payload: { text: e.target.value },
        });
      }
    }
  };

  const changeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <React.Fragment>
      <div className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyUp={keyUp}
          value={inputValue}
          onChange={changeInput} />
      </div>
    </React.Fragment>
  );
};
export default AddTodo;

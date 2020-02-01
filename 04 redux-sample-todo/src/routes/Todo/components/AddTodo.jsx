import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todosModule from "../../../modules/todosModule";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodo = e => {
    if (input !== "") {
      e.preventDefault();
      dispatch(todosModule.actions.addTodo(input));
      setInput("");
    }
  };

  return (
    <form>
      <input
        type="text"
        onChange={e => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button type="submit" onClick={addTodo}>
        add
      </button>
    </form>
  );
};

export default AddTodo;

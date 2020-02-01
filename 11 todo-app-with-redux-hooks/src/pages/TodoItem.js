/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { item, itemIndex } = props;
  const toggleTodoItem = () => {
    dispatch({
      type: "todos/toggle",
      payload: itemIndex,
    });
  };
  return (
    <React.Fragment>
      <li className={`${item.completed ? "completed" : null}`}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.completed}
            onChange={toggleTodoItem} />
          <label>{item.text}</label>
          <button className="destroy" type="button" />
        </div>
        <input className="edit" defaultValue="Rule the web" />
      </li>
    </React.Fragment>
  );
};
TodoItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
  }),
  itemIndex: PropTypes.number,
};

TodoItem.defaultProps = {
  item: {
    text: "",
  },
  itemIndex: 0,
};

export default TodoItem;

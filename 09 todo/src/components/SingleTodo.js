import React, { Fragment } from "react";

class SingleTodo extends React.Component {
  handleClick = event => {
    this.props.toggleTodoCompleted(event, this.props.todo);
  };

  handleButtonClick = event => {
    this.props.removeTodo(event, this.props.todo);
  };

  render() {
    return (
      <Fragment>
        <input
          type="checkbox"
          name={this.props.todo.timestamp}
          id={this.props.todo.timestamp}
          className="todo-item"
          onClick={this.handleClick}
        />
        <label htmlFor={this.props.todo.timestamp}>
          <span
            style={
              this.props.todo.isCompleted
                ? {
                    color: "white",
                    textDecoration: "line-through"
                  }
                : {
                    color: "white"
                  }
            }
          >
            {this.props.todo.text}
          </span>
        </label>
        <br />
        <br />
      </Fragment>
    );
  }
}

export default SingleTodo;

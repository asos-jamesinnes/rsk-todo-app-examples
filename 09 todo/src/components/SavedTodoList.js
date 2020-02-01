import React, { Fragment } from "react";
import SingleTodo from "./SingleTodo";

class SavedTodoList extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Saved Todos</h1>
        <ul>
          {this.props.savedTodos.map(todo => {
            return (
              <SingleTodo
                key={todo.timestamp}
                todo={todo}
                removeTodo={this.props.removeTodo}
              />
            );
          })}
        </ul>

        <button onClick={this.props.removeSavedTodos}>
          Clear your saved Todos!
        </button>
      </Fragment>
    );
  }
}

export default SavedTodoList;

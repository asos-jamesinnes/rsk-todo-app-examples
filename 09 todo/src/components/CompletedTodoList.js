import React, { Fragment } from "react";
import SingleTodo from "./SingleTodo";

class CompletedTodoList extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="heading">Completed Todos</h1>
        <div className="completed-todo-list">
          <form>
            {this.props.todos.map(todo => {
              if (todo.isCompleted) {
                return (
                  <SingleTodo
                    key={todo.timestamp}
                    todo={todo}
                    toggleTodoCompleted={this.props.toggleTodoCompleted}
                    removeTodo={this.props.removeTodo}
                  />
                );
              }
            })}
          </form>
        </div>
      </Fragment>
    );
  }
}

export default CompletedTodoList;

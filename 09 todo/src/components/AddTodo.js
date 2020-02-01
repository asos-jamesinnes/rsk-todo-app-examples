import React from "react";

class AddTodo extends React.Component {
  render() {
    return (
      <div className="addTodo">
        <h1 className="heading">Add a Todo</h1>
        <form
          onSubmit={this.props.handleSubmit}
          autoComplete="off"
          id="addTodoForm"
        >
          <input type="text" name="todo" placeholder="todo" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;

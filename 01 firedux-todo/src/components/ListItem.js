import React, { Component } from 'react';
import {connect} from 'react-redux';
import {completeToDo} from '../actions';

class ListItem extends Component {
  //Event handler that completes our todo.
  //Removing it from the database.
  handleComplete = () => {
    const {completeToDo, todoId} = this.props;
    completeToDo(todoId);
  };
  //Renders our todo items, using props passed in from the
  //upstream map function to render the title.
  render() {
    const{todoId, todo} = this.props;
    return (
      <div key = "toDoName">
        <h4>
          <span onClick={() => this.handleComplete(todoId)} className = "ListItem">
            {todo.title}
            <i className = "DoneButton">Done</i>
            </span>
          </h4>
       </div>
        );
  }
}

//Adds our completeToDo action to this component.
export default connect(null, {completeToDo}) (ListItem);

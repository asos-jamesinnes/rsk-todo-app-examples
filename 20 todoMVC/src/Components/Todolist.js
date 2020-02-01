import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


class Todolist extends React.Component{
  
  componentDidMount(){
    const {username, user_id, requestGetTodos} = this.props;
    requestGetTodos(username, user_id);
  }

  render(){
    const {todos, username, requestToggleTodo, requestDeleteTodo, requestEditTodo,} = this.props;
    return (
      <ul style={{'listStyleType': 'none', margin: 'auto', padding: '0 0', height: '50'}}>
        {todos.map(todo =>(
          <Todo key={todo.id}
                {...todo}
                onToggleClick={(completed) => requestToggleTodo(username, completed, todo.id)}
                onDeleteClick={() => requestDeleteTodo(username, todo.id)}
                onEditClick={(text) => requestEditTodo(username, text, todo.id)}
          />
        ))}
      </ul>)
  }
};

Todolist.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  requestToggleTodo: PropTypes.func.isRequired,
  requestGetTodos: PropTypes.func.isRequired,
  requestEditTodo: PropTypes.func.isRequired,
  requestDeleteTodo: PropTypes.func.isRequired,
};

export default Todolist;

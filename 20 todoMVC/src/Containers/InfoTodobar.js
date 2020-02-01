import {connect} from "react-redux";
import TodoBar from '../Components/TodoBar';
import {requestToggleTodo, requestAddTodo} from "../Actions";

const getHidden = todos => {
  let hidden = 'hidden';
  if(todos.length !== 0){
    hidden = 'visible'
  }
  return hidden
};

const getNumber = todos => {
  let number = 0;
  todos.forEach(todo => {
    if(!todo.completed){
      number = number + 1;
    }
  });
  return number
};

const mapStateToProps = state => ({
  hidden: getHidden(state.todos),
  number: getNumber(state.todos),
  username: state.user['username'],
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  requestToggleTodo: (username, completed, id) => dispatch(requestToggleTodo(username, completed, id)),
  requestAddTodo: (username, text) => dispatch(requestAddTodo(username, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoBar)
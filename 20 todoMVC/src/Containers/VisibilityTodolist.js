import {connect} from "react-redux";
import { requestDeleteTodo, requestGetTodos, requestEditTodo,requestToggleTodo} from "../Actions";
import Todolist from '../Components/Todolist';
import {VisibilityFilter} from "../Actions";


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      throw new Error('unknown filter' + filter)
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  username: state.user['username'],
  user_id: state.user['user_id'],
});

const mapDispatchToProps = dispatch => ({
  requestToggleTodo: (username, completed, id) => dispatch(requestToggleTodo(username, completed, id)),
  requestDeleteTodo: (username, id) => dispatch(requestDeleteTodo(username, id)),
  requestEditTodo: (username,text, id) => dispatch(requestEditTodo(username, text, id)),
  requestGetTodos: (username, id) => dispatch(requestGetTodos(username, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todolist)
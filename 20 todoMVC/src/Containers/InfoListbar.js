import {connect} from 'react-redux';
import {requestDeleteTodo, setVisibilityFilter} from "../Actions";
import Listbar from '../Components/Listbar';

const getNumberActive = todos => {
  let number_active = 0;
  todos.forEach(todo => {
    if(!todo.completed){
      number_active = number_active + 1;
    }
  });
  return number_active
};

const getNumberAll = todos => {
  return todos.length;
};

const mapStateToProps = (state ) => ({
  number_active: getNumberActive(state.todos),
  number_all: getNumberAll(state.todos),
  username: state.user['username'],
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (filter) => dispatch(setVisibilityFilter(filter)),
  requestDeleteTodo: (username, id) => dispatch(requestDeleteTodo(username, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Listbar);
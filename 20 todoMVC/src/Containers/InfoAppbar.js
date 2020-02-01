import {connect} from 'react-redux';
import { setUserName, setUserId, resetTodos } from '../Actions';
import ButtonAppBar from '../Components/ButtonAppBar';

const mapStateToProps = state => ({
  username: state.user['username'],
})

const mapDispatchToProps = dispatch => ({
  setUserName: (name) => dispatch(setUserName(name)),
  setUserId: id => dispatch(setUserId(id)),
  resetTodos: () => dispatch(resetTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
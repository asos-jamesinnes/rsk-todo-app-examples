import {connect} from 'react-redux';
import { setUserName, resetTodos } from '../Actions';
import ChangeUserProfile from '../Components/ChangeUserProfile';

const mapStateToProps = state => ({
  user_id: state.user['user_id'],
})

const mapDispatchToProps = dispatch => ({
  setUserName: (name) => dispatch(setUserName(name)),
  resetTodos: () => dispatch(resetTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserProfile);
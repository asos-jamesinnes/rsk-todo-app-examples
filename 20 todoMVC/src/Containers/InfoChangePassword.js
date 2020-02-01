import {connect} from 'react-redux';
import { resetTodos } from '../Actions';
import ChangePassword from '../Components/ChangePassword';

const mapDispatchToProps = dispatch => ({
  resetTodos: () => dispatch(resetTodos()),
})

export default connect(null, mapDispatchToProps)(ChangePassword);
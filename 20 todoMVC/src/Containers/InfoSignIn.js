import {connect} from 'react-redux';
import { setUserName, setUserId } from '../Actions';
import SignIn from '../Components/SignIn';

const mapDispatchToProps = dispatch => ({
  setUserName: (name) => dispatch(setUserName(name)),
  setUserId: id => dispatch(setUserId(id)),
})

export default connect(null, mapDispatchToProps)(SignIn);
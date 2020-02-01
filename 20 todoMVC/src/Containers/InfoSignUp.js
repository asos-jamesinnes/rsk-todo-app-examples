import {connect} from 'react-redux';
import { setUserName, setUserId } from '../Actions';
import SignUp from '../Components/SignUp';

const mapDispatchToProps = dispatch => ({
  setUserName: (name) => dispatch(setUserName(name)),
  setUserId: id => dispatch(setUserId(id)),
})

export default connect(null, mapDispatchToProps)(SignUp);
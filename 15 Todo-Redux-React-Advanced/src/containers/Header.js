import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo } from '../actions'

export default connect(null, { addTodo })(Header)

//so from app.js to here we are importing components/header and connecting addtodo function

import React from 'react'
import TodoTextInput from './TodoTextInput'
import PropTypes from 'prop-types'

const Header = ({ addTodo }) => (
  <header className="header">
  <h1>todos</h1>
  <TodoTextInput
    newTodo
    onSave={(text)=> {
      if(text.length !== 0){
        addTodo(text)
      }
    }}
    placeholder="What needs to be done?"
  />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}
// above this proptype is the same as static proptype

export default Header

//we are taking addTodo as an argument. the adTodo is the function we connect from containers/header. we take it in as argument. we make sure addTodo function is used in the TodoTextInput component or a warning will be given console. newTodo is being passed in as true. if it were passed in as newTodo={false} it would be false.

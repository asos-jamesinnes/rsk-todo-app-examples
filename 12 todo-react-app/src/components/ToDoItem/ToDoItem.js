import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Item = styled.li`
  color: ${props => props.done ? 'green' : '#eee' };
  text-decoration: ${props => props.done ? 'line-through' : 'auto' }
`

class ToDoItem extends Component {

    static defaultProps = {
      done: false
    }
    state = {
      done: this.props.done
    }
  
    toggleDone = () => {
      this.setState({done: !this.state.done})
    }
  
    render () {
      const { id, text, done } = this.props
      return(
          <Item onClick={this.toggleDone} done={done}>
            <div className={'ToDoItem'}>
            {text}
              <Link to={`/todo_items/${id}`}>
                edit
              </Link>
            </div>
          </Item>
      )
    }
  }

  export default ToDoItem;
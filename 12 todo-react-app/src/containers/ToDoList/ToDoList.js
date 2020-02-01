import React, { Component } from 'react';

import ToDoItem from '../../components/ToDoItem/ToDoItem.js'
import NewToDoForm from '../../components/NewToDoForm/NewToDoForm.js'
import styled from 'styled-components'
import * as toDoItemsApiUrl from '../../helpers/toDoItemApi.js'
import * as _ from 'ramda'

const Container = styled.div`
    background: #333;
    padding: 30px;
`

class ToDoList extends Component {
    componentDidMount =  async () => {
        const tasks = await toDoItemsApiUrl.getAll()
        this.setState({tasks: tasks})
    }
    
    static defaultProps = {
        tasks: [],
        title: 'MyApp',
    }

    state = {
      tasks: this.props.tasks,
      draft: ''
    }
  
    updateDraft = event => {
      this.setState({draft: event.target.value})
    }
  
    addToDo = async () => {
      const { tasks, draft } = this.state

      const task = await toDoItemsApiUrl.create({text: draft})

      this.setState({ tasks: _.append(task, tasks), draft: '' })
    }

    
  
    render () {
      const { title } = this.props
      const { tasks, draft } = this.state
      return (
        <Container>
          <h1>{title}</h1>
          <ul>
          {tasks.map(task => <ToDoItem id={task.id} key={task.key} text={task.text} done={task.done} />)}
          </ul>
          <NewToDoForm
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft} />
        </Container>
      )
    }
  }
  
  export default ToDoList;
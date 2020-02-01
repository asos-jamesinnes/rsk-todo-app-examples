import React, { Component } from 'react'
import styled from 'styled-components'

const EditForm = styled.div`
  color: #fff
`

class ToDoEditForm extends Component {

    render () {
      return(
          <EditForm>
              Item Edit Form {this.props.match.params.itemId}
          </EditForm>
      )
    }
  }

  export default ToDoEditForm;
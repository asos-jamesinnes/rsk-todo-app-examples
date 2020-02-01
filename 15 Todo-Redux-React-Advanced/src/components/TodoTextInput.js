import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.vaue })
  }

  render() {
    return (
      <input
      type="text"
      placeholder={this.props.placeholder}
      value={this.state.text}
      onChange={this.handleChange}
      onKeyDown={this.handleSubmit}
      />
    )
  }
}
//static proptype is the same a pure proptype
// class Title extends React.Component {
//   static propTypes = { title: PropTypes.string.isRequired };
//
//   render() {
//     return (
//       <h1>{title}</h1>
//     );
//   }
// }
//
// // or written as a pure function
//
// const Title = ({ title }) => (
//   <h1>{title}</h1>
// );
//
// Title.propTypes = { title: PropTypes.string.isRequired }

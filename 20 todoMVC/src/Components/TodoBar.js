import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import ListRounded from '@material-ui/icons/ListRounded';
import DoneAll from '@material-ui/icons/DoneAll';

const styles = {
  root: {
    padding: '2px 2px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    width: 500,
    height: 50,
    backgroundColor: 'rgb(100, 100, 100)',
  },
  input: {
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 5,
    flex: 1,
    border: '1px solid grey',
    width: 400,
  },
  iconButton: {
    padding: 5,
  },
};

class TodoBar extends React.Component{
  constructor(props){
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const {username, todos, requestToggleTodo} = this.props;
    todos.forEach(todo => {
      requestToggleTodo(username, e.target.checked, todo.id)
    });
  }

  handleKeyDown(e){
    if(e.keyCode !== 13){
      return null
    }
    e.preventDefault();
    let text = e.target.value.trim();
    const {requestAddTodo, username} = this.props;
    if(text.length > 0){
      requestAddTodo(username, text);
      e.target.value = '';
    }
  }

  render(){
    const {classes, hidden, number} = this.props;
    let completedAll = false;
    if(number === 0){
      completedAll = true
    }
    return (
      <Paper className={classes.root} elevation={1}>
        <Checkbox
          style={{visibility: hidden, color:'black'}}
          icon={<ListRounded/>}
          checkedIcon={<DoneAll/>}
          checked={completedAll}
          onChange={this.handleChange}/>
        <InputBase
          placeholder="What needs to be done?"
          className={classes.input}
          onKeyDown={this.handleKeyDown}
        />
      </Paper>
    );
  }
}

TodoBar.propTypes = {
  classes: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  hidden: PropTypes.string.isRequired,
  requestToggleTodo: PropTypes.func.isRequired,
  requestAddTodo: PropTypes.func.isRequired,
};

export default withStyles(styles)(TodoBar);

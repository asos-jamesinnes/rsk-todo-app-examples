import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core';
import {VisibilityFilter} from "../Actions";

const styles = ({
  root: {
    padding: '2px 2px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    width: 500,
    height: 30,
    borderBottom: '1px solid black',
    backgroundColor: 'rgb(100, 100, 100)',
  },
  title: {
    fontSize: 12,
    marginRight: 50,
    marginLeft: 5,
    width: 60
  },
  button1: {
    margin: '2px 10px',
    padding: '2px 2px',
    height: 22,
    fontSize: 12,
    textTransform: 'none',
    backgroundColor: 'inherit',
    boxShadow: 'none',
    border: 'none',
  },
  button2: {
    margin: '2px 10px',
    padding: '2px 2px',
    height: 22,
    fontSize: 12,
    textTransform: 'none',
    backgroundColor: 'inherit',
    boxShadow: 'none',
  },
  button3: {
    margin: '2px 10px',
    padding: '2px 2px',
    height: 22,
    fontSize: 12,
    textTransform: 'none',
    backgroundColor: 'inherit',
    boxShadow: 'none',
  },
  button4: {
    margin: '2px 2px 2px 50px',
    padding: '2px 2px',
    height: 25,
    fontSize: 10,
    textTransform: 'none',
    '&:hover':{
      textDecoration: 'underline',
      backgroundColor: 'inherit',
    },
  },
});

const Listbar = ({classes, number_active, number_all, username, todos, onFilterClick, requestDeleteTodo}) => {
  let item = 'items';
  let hidden = 'hidden';
  if (number_active === 0 || number_active === 1){
    item = 'item';
  }
  if((number_all - number_active) > 0 ){
    hidden = 'visible'
  }

  const DeleteCompleted = () => {
    todos.forEach(todo => {
      if(todo.completed){
        requestDeleteTodo(username, todo.id);
      }
    });
  }

  return (
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.title} >
          {number_active} {item} left
        </Typography>
        <NavLink to= '/SHOW_ALL' activeStyle={{textDecoration: 'none'}}>
          <Button
            variant="contained"
            disableRipple={true}
            className={classes.button1}
            onClick={() => onFilterClick(VisibilityFilter.SHOW_ALL)}
          >All</Button>
        </NavLink>
        <NavLink to= '/SHOW_ACTIVE' activeStyle={{textDecoration: 'none'}}>
          <Button variant="contained"
                className={classes.button2}
                onClick={() => onFilterClick(VisibilityFilter.SHOW_ACTIVE)}
          >Active</Button>
        </NavLink>
        <NavLink to='/SHOW_COMPLETED' activeStyle={{textDecoration: 'none'}}>
          <Button variant="contained"
                className={classes.button3}
                onClick={() => onFilterClick(VisibilityFilter.SHOW_COMPLETED)}
          >Completed</Button>
        </NavLink>
        <Button className={classes.button4}
                style={{visibility: hidden}}
                onClick={() => DeleteCompleted()}
        >ClearCompleted</Button>
      </Paper>
  );
};

Listbar.propTypes = {
  classes: PropTypes.object.isRequired,
  number_active: PropTypes.number.isRequired,
  number_all: PropTypes.number.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onFilterClick: PropTypes.func.isRequired,
  requestDeleteTodo: PropTypes.func.isRequired,  
};

export default withStyles(styles)(Listbar);

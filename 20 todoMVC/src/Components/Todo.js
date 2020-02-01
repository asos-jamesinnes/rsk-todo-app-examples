import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import DonutLarge from '@material-ui/icons/DonutLarge';
import Done from '@material-ui/icons/Done';

const styles = {
  root: {
    padding: '2px 2px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    width: 500,
    height: 50,
    backgroundColor: 'rgb(100, 100, 100)',
    '&:hover $iconButton': {
      opacity: 1,
    },
  },
  input: {
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 5,
    flex: 1,
    border: '1px solid grey',
    width: 360,
  },
  iconButton: {
    padding: 5,
    opacity: 0,
  },
};

const Todo = ({classes, onToggleClick, onDeleteClick, onEditClick, completed, text,}) => {
  return (
    <li>
      <Paper className={classes.root} elevation={1}>
        <Checkbox
          style={{color: 'black'}}
          icon={<DonutLarge />}
          checkedIcon={<Done />}
          checked={completed}
          onChange={(e) => onToggleClick(e.target.checked)} />
        <InputBase
          defaultValue={text}
          className={classes.input}
          style={{textDecoration: completed ? 'line-through' : 'none', border: 'none'}}
          onKeyDown={e => {
            if(e.keyCode !== 13){
              return null
            }
            e.preventDefault();
            const text = e.target.value.trim();
            if(text.length !== 0){
              onEditClick(text)
            }else{
              onDeleteClick();
            }
          }} />
        <IconButton className={classes.iconButton}
                    onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </Paper>
    </li>
  );
};

Todo.propTypes = {
  classes: PropTypes.object.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(Todo);
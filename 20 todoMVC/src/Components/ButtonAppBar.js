import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import 'whatwg-fetch';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from './Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
  bar: {
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'black',
  },
};

const ButtonAppBar = ({classes, username, setUserName, setUserId, resetTodos}) => {
  let display1 = 'none';
  let display2 = 'inline-block';
  if(username){
    display1 = 'inline-block';
    display2 = 'none';
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar >
          <Typography variant="subtitle2" style={{display: display1}}>
            {username}
          </Typography>
          <TemporaryDrawer setUserName={setUserName} setUserId={setUserId} resetTodos={resetTodos} display={display1}/>
          <Typography variant="h3" color="inherit" className={classes.grow}>
            Todos
          </Typography>
          <Button component={Link}  to='/sign-up' color="inherit" style={{display: display2}} >Sign-Up</Button>
          <Button component={Link} to='/sign-in' ccolor="inherit" style={{display: display2}} >Sign-In</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  setUserName: PropTypes.func.isRequired,
  setUserId: PropTypes.func.isRequired,
  resetTodos: PropTypes.func.isRequired,
};

export default withStyles(styles)(ButtonAppBar);


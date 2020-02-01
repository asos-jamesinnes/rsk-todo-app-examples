import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from '@material-ui/core/IconButton';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleLogOut = () => {
    const token1 = localStorage.getItem('token1');
    const {setUserName, setUserId, resetTodos} = this.props;
    fetch('http://localhost:8000/logout/', {
    method: 'GET',
    body: null,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json; charset=UTF-8',
        'Authorization': 'Token ' + token1,
    },
    credentials: 'omit',
    }).then(function (response) {
    alert('Log Out!');
    localStorage.setItem('token1', '');
    setUserName('');
    setUserId(-1);
    resetTodos();  
	  }, function(error){
	  alert(error.message);
	  });
  };

  render() {
    const { classes, display } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          {['Change_User_Profile', 'Change_Password'].map((text) => (
            <ListItem button key={text} component={Link} to={'/'+ text} >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Log_Out'].map((text) => (
            <ListItem button key={text} onClick={this.handleLogOut}>
              <ListItemIcon><CancelIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <IconButton onClick={this.toggleDrawer('left', true)} style={{display: display}}>
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  display: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  setUserId: PropTypes.func.isRequired,
  resetTodos: PropTypes.func.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
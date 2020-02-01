import React from 'react';
import 'whatwg-fetch';
import {PropTypes} from "prop-types";
import {Link} from 'react-router-dom';
import {withStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';

class ChangePassword extends React.Component {
  constructor(props){
    super(props);
    this.formRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const form = this.formRef.current;
    const {resetTodos} = this.props;
    const token1 = localStorage.getItem('token1');
    let data = {};
    for (let i = 0,l = form.length;i < l; i++){
      let input = form[i];
      if(input.name){
        data[input.name] = input.value;
      }
    }
    if(data["new_password"] !== data["password_confirm"]){
      alert("password doesn't match!");
      return null;
    }
    let password ={};
    password["old_password"] = data["old_password"];
    password["new_password"] = data["new_password"];
    fetch('http://localhost:8000/password/', {
    method: 'PUT',
    body: JSON.stringify(password),
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json; charset=UTF-8',
        'Authorization': 'Token ' + token1,
    },
    credentials: 'omit',
    }).then(function (response) {
    	return response.text().then(function(text){
        alert('Change Password Done!');
				for (let i = 0, l = form.length; i < l; ++i) {
					form[i].value = ''
        };
        resetTodos();
				window.history.go(-1);
			})
		},function(error){
			alert(error.message);
		});
  }

  render(){
    const {classes} = this.props;
    return(
      <form className={classes.container} ref={this.formRef} onSubmit={this.handleSubmit}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Change Password
              </Typography>
              <AccountCircle style={{display: 'block', margin: 'auto'}}/>
              <TextField
                id="outlined-password-input1"
                label="Old Password"
                className={classes.textField}
                type="password"
                name="old_password"
                margin="normal"
                variant="outlined"
                required={true}
              />
              <TextField
                id="outlined-password-input2"
                label="New Password"
                className={classes.textField}
                type="password"
                name="new_password"
                margin="normal"
                variant="outlined"
                required={true}
              />
              <TextField
                id="outlined-password-input3"
                label="Password Confirm"
                className={classes.textField}
                type="password"
                name="password_confirm"
                margin="normal"
                variant="outlined"
                required={true}
              />
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.button}>
            <Button className={classes.button1} size="small" component={Link} to='/'>
              Cancel
            </Button>
            <Button className={classes.button2} type='submit' size="small" >
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

const styles  = ({
  card: {
    maxWidth: 500,
    margin: '100px auto',
    padding: '100px 50px',
    textAlign: 'center',
  },
  textField: {
    width: 400,
  },
  button1: {
    position: 'relative',
    left: 50,
    border: '1px solid black',
  },
  button2: {
    position: 'relative',
    left: 290,
    border: '1px solid black',
  }
});

ChangePassword.propTypes = {
  classes: PropTypes.object.isRequired,
  resetTodos: PropTypes.func.isRequired,
};

export default withStyles(styles)(ChangePassword);
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

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.formRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const form = this.formRef.current;
    const {setUserName, setUserId} = this.props;
    let data = {};
    for (let i = 0,l = form.length;i < l; i++){
      let input = form[i];
      if(input.name){
        data[input.name] = input.value;
      }
    }
    data = {'username': data['username'], 'password': data['password']};
    fetch('http://localhost:8000/login/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json; charset=UTF-8',
    },
    credentials: 'omit',
    }).then(function (response) {
    	return response.text().then(function(text){
				localStorage.setItem('token1', JSON.parse(text)['token']);
				setUserName(data['username']);
				setUserId(JSON.parse(text)['user_id']);
				for (let i = 0, l = form.length; i < l; ++i) {
					form[i].value = ''
				};
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
                Sign-In
              </Typography>
              <AccountCircle style={{display: 'block', margin: 'auto'}}/>
              <TextField
                id="outlined-name-input"
                label="Name"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                type="text"
                name='username'
								required={true}
								inputProps={{minLength: 6, maxLength: 12}}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                name="password"
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

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
	setUserName: PropTypes.func.isRequired,
	setUserId: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignIn);
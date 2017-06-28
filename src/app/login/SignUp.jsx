import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Route from 'react-router-dom';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const style = {
  margin: 15,
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleClick() {
    const payload = {
      "username": this.state.username,
      "password": this.state.password,
    };
    axios.post('/signup', payload) // does it work if we get rid of apiBaseUrl and only use the endpoint ex: '/signup'
    .then((response) => {
      if (response.status === 200) { 
        this.props.history.push('/timeline');
      } else if (response.status === 204) {
        //if username exists but password is wrong than refresh the Login page
        this.props.history.push('/signup');
      }
    })   
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}/>
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}/>
            <br />
            <RaisedButton label="Sign up" primary={true} style={style} onClick={event => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SignUp;
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const style = {
  margin: 15,
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleClick() {
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };
    axios.post('/login', payload)
    .then((response) => {
      if (response.status === 200) { 
        console.log('sign up successful');
        this.props.history.push('/timeline');
      } else if (response.status === 204) {
        this.props.history.push('/login');
      }
    })
    .catch((error) => {
      console.log(error,'Error');
    })
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="login">
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })} />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })} />
            <br />
            <RaisedButton label="Login" style={style} onClick={event => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;

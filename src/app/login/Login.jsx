import React, { Component } from 'react';
import {Redirect, Route, Switch, Link, Router } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SignUp from './SignUp.jsx';
import axios from 'axios';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Timeline from '../timeline/Timeline.jsx';
import App from '../App.jsx';
import PropTypes from 'prop-types';
import ReactRedirect from 'react-redirect';

const style = {
  margin: 15,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      path: this.props.location.pathname
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
        this.props.history.push('/timeline');
      } else if (response.status === 204) {
        //if username exists but password is wrong than refresh the Login page
        this.props.history.push('/login');
      }
    })
    .catch((error) => {
      console.log(error);
    })
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
            <RaisedButton label="Login" primary={true} style={style} onClick={event => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// import Timeline from '../Timeline.jsx'; //make sure this is the right path for your computer
import SignUp from './SignUp.jsx';
import axios from 'axios';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';



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
    const apiBaseUrl = 'http://localhost:3000/';
    const payload = {
      'username': this.state.username,
      'password': this.state.password,
    };

    axios.post(apiBaseUrl+'login', payload)
    .then((response) => {
      if (response.status === 200) { 
        //if login successful render Timeline component
        <Route path="/timeline" component={Timeline}/>
      } else if (response.status === 204) {
        //if username exists but password is wrong than refresh the Login page
        <Route path="/login" component={Login}/>
      } else {
        //if the username doesn't exist render SignUp component
        <Route path="/signup" component={SignUp}/>
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
            <AppBar
              title="Login"
              iconElementLeft={
                <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>} >
                  <MenuItem primaryText="Map" containerElement={<Link to='/map' />} />
                  <MenuItem primaryText="Timeline" containerElement={<Link to='/timeline' />} />
                  <MenuItem primaryText="Logout" containerElement={<Link to='/logout' />} />
                </IconMenu>
              }

            />
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

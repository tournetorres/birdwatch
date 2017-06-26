import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
// import { DropDownMenu, MenuItem, IconMenu, IconButton } from "material-ui";
// import React from 'react';

const Header = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <AppBar title="Welcome to BirdWatch"/>
        <h1>In Header</h1>
      </div>
    </MuiThemeProvider>
  </div>
);        

export default Header;

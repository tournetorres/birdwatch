import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import { DropDownMenu, MenuItem, IconMenu, IconButton } from "material-ui";
import React from 'react';

const Header = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <AppBar title="Welcome to BirdWatch"
          iconElementLeft={
          <IconMenu iconButtonElement={
            <IconButton iconClassName="material-icons" > menu </IconButton>
            }>
            <MenuItem primaryText="Home" />
            <MenuItem primaryText="Profile" />
            <MenuItem primaryText="Sign out" />
        </IconMenu>
        }
        />
      </div>
    </MuiThemeProvider>
  </div>
);          

{/*<header>
    <h1>Hello World!</h1>
    <button>My Birds</button>
    <button>Search All Birds</button>
  </header>*/}
export default Header;

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
// import { DropDownMenu, MenuItem, IconMenu, IconButton } from "material-ui";
// import React from 'react';

// const Header = () => (
//   <div>
//     <MuiThemeProvider>
//       <div>
//         <AppBar title="Welcome to BirdWatch"
//           iconElementLeft={
//           <IconMenu iconButtonElement={
//             <IconButton iconClassName="material-icons" > menu </IconButton>
//             }>
//             <MenuItem primaryText="Home" />
//             <MenuItem primaryText="Profile" />
//             <MenuItem primaryText="Sign out" />
//         </IconMenu>
//         }
//         />
//       </div>
//     </MuiThemeProvider>
//   </div>
// );        

const style = {
  margin: 15,
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
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


export default Header;

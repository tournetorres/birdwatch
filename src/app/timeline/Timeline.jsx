import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';


class Timeline extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="TimeLine"
              iconElementLeft={
                <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>} >
                  <MenuItem primaryText="Map" containerElement={<Link to='/map' />} />
                  <MenuItem primaryText="Timeline" containerElement={<Link to='/timeline' />} />
                  <MenuItem primaryText="Logout" containerElement={<Link to='/logout' />} />
                </IconMenu>
              }
            />
            <h1> Your in the Timeline </h1>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Timeline;

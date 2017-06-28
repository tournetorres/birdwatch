import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <AppBar
          title="Bird Watch"
          iconElementLeft={
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>} >
              <MenuItem primaryText="Map" containerElement={<Link to='/map' />} />
              <MenuItem primaryText="Timeline" containerElement={<Link to='/timeline' />} />
              <MenuItem primaryText="Logout" containerElement={<Link to='/logout' />} />
            </IconMenu>
          }
        />
      </div>
    </MuiThemeProvider>
  </div>    
);

export default Header;

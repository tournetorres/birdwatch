import React, { Component } from 'react';
// import Map, { Marker, InfoWindow } from 'google-maps-react';
import GMap from './GMap.jsx';
import SimpleForm from './Search.jsx';
import { Route, Switch, Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class MapContainer extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Map"
              iconElementLeft={
                <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>} >
                  <MenuItem primaryText="Map" containerElement={<Link to='/map' />} />
                  <MenuItem primaryText="Timeline" containerElement={<Link to='/timeline' />} />
                  <MenuItem primaryText="Logout" containerElement={<Link to='/logout' />} />
                </IconMenu>
              }
            />
            <SimpleForm /> 
            <br />
            <GMap google={window.google}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default MapContainer;

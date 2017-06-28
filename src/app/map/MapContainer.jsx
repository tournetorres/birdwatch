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
import exampleBirdData from '../data/exampledata.jsx';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdData: exampleBirdData,
    };
    this.birdCatcher = this.birdCatcher.bind(this);
  }

  birdCatcher(data) {
    console.log(data, "birds caught!!");
    console.log(this.state.birdData, 'old data')
    this.setState({ birdData: data.data }, () => {
      console.log(this.state.birdData, "new data")
    });
  }

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
            <SimpleForm birdCatcher={this.birdCatcher} /> 
            <br />
            <GMap google={window.google} birdData={this.state.birdData}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default MapContainer;


// onChange={(event, newValue) => this.setState({ birdData: newValue })}
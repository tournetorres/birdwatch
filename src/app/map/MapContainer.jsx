import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleForm from './Search.jsx';
import exampleBirdData from '../data/exampledata.jsx';
import Header from '../Header.jsx';
import GMap from './GMap.jsx';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdData: exampleBirdData,
      latLng: { lat: 29.95106579999999, lng: -90.0715323 },
    };
    this.birdCatcher = this.birdCatcher.bind(this);
    this.getLatLng = this.getLatLng.bind(this);
  }
  getLatLng(data) {
    this.setState({ latLng: data }, () => {
      console.log(this.state.latLng, 'set state');
    });
  }
  birdCatcher(data) {
    this.setState({ birdData: data.data }, () => {
      console.log(this.state.birdData, 'new data');
    });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Header />
            <SimpleForm birdCatcher={this.birdCatcher} getLatLng={this.getLatLng} />
            <br />
            <GMap google={window.google} birdData={this.state.birdData} latLng={this.state.latLng} />
            <br />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default MapContainer;

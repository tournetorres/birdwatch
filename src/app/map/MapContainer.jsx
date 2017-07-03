import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleForm from './Search.jsx';
import exampleBirdData from '../data/exampledata.jsx';
import Header from '../Header.jsx';
import GMap from './GMap.jsx';
import ScrollToTop from 'react-scroll-up';
import LocationOn from 'material-ui/svg-icons/navigation/arrow-upward';

const upIcon = <LocationOn />;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdData: exampleBirdData,
      latLng: { lat: 29.95106579999999, lng: -90.0715323 },
    };
    this.getLatLng = this.getLatLng.bind(this);
    this.birdCatcher = this.birdCatcher.bind(this);
  }
  getLatLng(data) {
    this.setState({ latLng: data });
  }
  birdCatcher(data) {
    this.setState({ birdData: data.data });
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
            <ScrollToTop
              showUnder={100}
              style={{
                position: 'fixed',
                bottom: 20,
                right: 'auto',
                left: 30,
                transitionDuration: '0.2s',
                transitionTimingFunction: 'linear',
                transitionDelay: '0s' }}
            >
              <span>{upIcon}</span>
            </ScrollToTop>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default MapContainer;

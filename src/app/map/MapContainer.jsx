import React, { Component } from 'react';
import GMap from './GMap.jsx';
import SimpleForm from './Search.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import exampleBirdData from '../data/exampledata.jsx';
import GMap from './GMap.jsx';
import SimpleForm from './Search.jsx';
import Header from '../Header.jsx';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdData: exampleBirdData,
    };
    this.birdCatcher = this.birdCatcher.bind(this);
  }

  birdCatcher(data) {
    console.log(data, 'birds caught!!');
    this.setState({ birdData: data.data }, () => {
      console.log(this.state.birdData, 'new data')
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Header />
            <SimpleForm birdCatcher={this.birdCatcher} /> 
            <br />
            <GMap google={window.google} birdData={this.state.birdData} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MapContainer;
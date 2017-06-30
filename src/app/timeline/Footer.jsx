import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import exampleBirdData from '../data/exampleBirdFeed.jsx';
import Comment from 'material-ui/svg-icons/communication/comment';
import { grey50, yellow500 } from 'material-ui/styles/colors';
import axios from 'axios';
const fileDownload = <FileCloudDownload color={grey50} hoverColor={yellow500}/>
const messageIcon = <Comment color={grey50} hoverColor={yellow500} />
const nearbyIcon = <LocationOn color={grey50} hoverColor={yellow500} />

const style = {
  margin: '0 auto',
  display: 'block',
  height: '100px',
  width: 'absolute',
  background: '#221aba'
};

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      birdFeed: exampleBirdData,
    };
    this.loadFeed = this.loadFeed.bind(this);
  }
  loadFeed() {
    axios.get('/birds').then((data) => {
      this.setState({ birdFeed: data.data });
      console.log(this.state.birdFeed, 'after posted');
    });
  }
  render(){
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Paper style={style} zDepth={1}>
              <BottomNavigation style={{ backgroundColor: '#221aba' }}>
                <BottomNavigationItem
                  label="Reload"
                  icon={fileDownload}
                  onClick={event => this.loadFeed(event)} 
                />
                <BottomNavigationItem
                  label="Log Bird Sighting"
                  icon={messageIcon}
                /> 
                <BottomNavigationItem
                  label="Birds Nearby"
                  icon={nearbyIcon}
                  containerElement={<Link to='/map' />}
                />
              </BottomNavigation>
            </Paper>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Footer;
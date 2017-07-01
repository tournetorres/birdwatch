import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import { grey50, yellow500 } from 'material-ui/styles/colors';

const fileDownload = <FileCloudDownload color={grey50} hoverColor={yellow500} />
const nearbyIcon = <LocationOn color={grey50} hoverColor={yellow500} />


const style = {
  margin: '0 auto',
  display: 'block',
  height: '100px',
  width: 'absolute',
  background: '#221aba',
};

const Footer = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <Paper style={style} zDepth={1}>
          <BottomNavigation style={{ backgroundColor: '#221aba' }}>
            <BottomNavigationItem
              icon={fileDownload}
              onClick={e => this.props.loadFeed(e) }
            />
            <BottomNavigationItem
              icon={nearbyIcon}
              containerElement={<Link to='/map' />}
            />
          </BottomNavigation>
        </Paper>
      </div>
    </MuiThemeProvider>
  </div>
);

export default Footer;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/images/bwlogo.png';

injectTapEventPlugin();

const style = {
  margin: 12,
  backgroundColor: '#f7b748',
  display: 'block',
  position: 'relative',
};

const SplashPage = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <img src={logo} alt="logo" style={{ width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} />
        <br />
        <div className="footer">
          <FlatButton label="Login" containerElement={<Link to="/login" />} style={style} />
          <FlatButton label="SignUp" containerElement={<Link to="/signup" />} style={style} />
        </div>
      </div>
    </MuiThemeProvider>
  </div>
);

export default SplashPage;

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import React from 'react';

injectTapEventPlugin();

const style = {
  margin: 12,
};

const SplashPage = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <h1>Logo Goes here</h1>
        <RaisedButton label="Login" containerElement={<Link to="/login" />} primary={true} style={style} />
        <RaisedButton label="SignUp" containerElement={<Link to="/signup" />} primary={true} style={style} />
      </div>
    </MuiThemeProvider>
  </div>
);

export default SplashPage;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import React from 'react';
import './SplashPage.scss';

injectTapEventPlugin();

const style = {
  margin: 12,
};

const SplashPage = () => (
  <div>
    <MuiThemeProvider>
      <div>
        <img src="http://i68.tinypic.com/311nvv7.png" className="img-responsive" alt="Responsive image" />
        <br />
        <RaisedButton label="Login" containerElement={<Link to="/login" />} primary={true} style={style} />
        <RaisedButton label="SignUp" containerElement={<Link to="/signup" />} primary={true} style={style} />
      </div>
    </MuiThemeProvider>
  </div>
);

export default SplashPage;
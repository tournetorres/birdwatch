import React, { Component } from 'react';
import TimeLine from './timeline/Timeline.jsx';
import MapContainer from './map/MapContainer.jsx';
import Login from './login/Login.jsx';
import SignUp from './login/SignUp.jsx';
import SplashPage from './login/SplashPage.jsx';
import { Route, Switch, Router} from 'react-router';
import Header from './Header.jsx';
import PropTypes from 'prop-types';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route path="/map" component={MapContainer} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/timeline" component={TimeLine} />
    </Switch>
  </div>
);
export default App;
import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
// import LoginButtons from './login/LoginButtons.jsx';
import LoginContainer from './login/LoginContainer.jsx';
import SplashPage from './login/SplashPage.jsx';
import MapContainer from './map/MapContainer.jsx';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/map" component={MapContainer} />
    </Switch>
  </div>
);
export default App;
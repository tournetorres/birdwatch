import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
// import LoginButtons from './login/LoginButtons.jsx';
import LoginContainer from './login/LoginContainer.jsx';
import TimeLine from './timeline/Timeline.jsx';
import MapContainer from './map/MapContainer.jsx';
import Login from './login/Login.jsx';
import SignUp from './login/SignUp.jsx';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/map" component={MapContainer} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/timeline" component={TimeLine} />
    </Switch>
  </div>
);
export default App;
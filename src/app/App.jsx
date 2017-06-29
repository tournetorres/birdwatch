import React, { Component } from 'react';
import { Route, Switch, Router, BrowserRouter } from 'react-router-dom';
import Login from './login/Login.jsx';
import SignUp from './login/SignUp.jsx';
import MapContainer from './map/MapContainer.jsx';
import TimeLine from './timeline/Timeline.jsx';
import SplashPage from './login/SplashPage.jsx';
import NotFound from './NotFound.jsx';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route path="/map" component={MapContainer} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/timeline" component={TimeLine} />
      <Route path="/logout" component={SplashPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>   
);
export default App;
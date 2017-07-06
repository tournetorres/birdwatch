/* global localStorage */

import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './login/Login.jsx';
import SignUp from './login/SignUp.jsx';
import MapContainer from './map/MapContainer.jsx';
import TimeLine from './timeline/Timeline.jsx';
import SplashPage from './login/SplashPage.jsx';
import CommentPage from './timeline/Comment.jsx';
import NotFound from './NotFound.jsx';
import Profile from './profile/Profile.jsx';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route
        path="/map"
        render={() => (
        localStorage.getItem('watcherToken') === null ? (
          <Redirect to="/login" />
        ) : (
          <MapContainer />
        )
      )}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route
        path="/timeline"
        render={() => (
        localStorage.getItem('watcherToken') === null ? (
          <Redirect to="/login" />
        ) : (
          <TimeLine />
        )
      )}
      />
      <Route path="/logout" component={SplashPage} />
      <Route
        path="/comment"
        render={() => (
        localStorage.getItem('watcherToken') === null ? (
          <Redirect to="/login" />
        ) : (
          <CommentPage />
        )
      )}
      />
      <Route
        path="/profile"
        render={() => (
        localStorage.getItem('watcherToken') === null ? (
          <Redirect to="/login" />
        ) : (
          <Profile />
        )
      )}
      />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;

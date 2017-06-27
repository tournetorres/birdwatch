import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import SplashPage from './SplashPage.jsx';

const LoginContainer = () => (
  <main>
    <Switch>
      <Route path="/" component={SplashPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </main>
);

export default LoginContainer;

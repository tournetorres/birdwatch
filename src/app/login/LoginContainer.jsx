import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import SplashPage from './SplashPage.jsx';
import LoginButtons from './LoginButtons.jsx';

const LoginContainer = () => (
  <main>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
    <LoginButtons />
  </main>
);

export default LoginContainer;

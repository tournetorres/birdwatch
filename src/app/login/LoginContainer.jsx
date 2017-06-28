import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import SplashPage from './SplashPage.jsx';
import LoginButtons from './LoginButtons.jsx';
// import MapContainer from '../map/MapContainer.jsx';

const LoginContainer = () => (
  <main>
    <SplashPage />  
    <LoginButtons />
  </main>
);

export default LoginContainer;

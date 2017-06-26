import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // use with dynamic server ; Use HashRouter with a static server 
import ReactDOM from 'react-dom';
// import App from './app/App.jsx';
import SignUp from './login/SignUp.jsx';
import './assets/stylesheets/styles.scss';

ReactDOM.render((
  <BrowserRouter>
    <SignUp /> 
  </BrowserRouter>
), document.getElementById('app'));

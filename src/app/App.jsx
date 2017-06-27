import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import LoginButtons from './login/LoginButtons.jsx';
import LoginContainer from './login/LoginContainer.jsx';

const App = () => (
  <div>
    <LoginContainer />
    <LoginButtons />
  </div>
);
export default App;
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // use with dynamic server ; Use HashRouter with a static server 
import ReactDOM from 'react-dom';
// import MapContainer from './map/MapContainer.jsx';
import Header from './app/Header.jsx';
import App from './app/App.jsx';
import './assets/stylesheets/styles.scss';

ReactDOM.render((
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
), document.getElementById('app'));

/*ReactDOM.render((
  <BrowserRouter>
    <MapContainer /> 
  </BrowserRouter>
), document.getElementById('map'));*/
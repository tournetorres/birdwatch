import React, { Component } from 'react';
// import Map, { Marker, InfoWindow } from 'google-maps-react';
import GMap from './GMap.jsx';
import SimpleForm from './Search.jsx';


const MapContainer = () => (
  <div>
    <SimpleForm /> 
    <br />
    <GMap google={window.google}/>
  </div>
)

export default MapContainer;

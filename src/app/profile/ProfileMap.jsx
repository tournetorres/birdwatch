import React, { Component } from 'react';
import Map, { Marker, InfoWindow } from 'google-maps-react';

class ProfileMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profileMap">
      <Map
      google={this.props.google}
      initialCenter={this.props.latLng}
      //TODO: iterate over data;
      //TODO: create a marker for each item in the data;
      />
      </div>
    );
  }
}
export default ProfileMap;

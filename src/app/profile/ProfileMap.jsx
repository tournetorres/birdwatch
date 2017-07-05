import React, { Component } from 'react';
import Map, { Marker, InfoWindow } from 'google-maps-react';

class ProfileMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Map
      google={this.props.google}
      style={{width: '90%', height: '50%', position: 'relative', margin: 'auto'}}
      />
    );
  }
}
export default ProfileMap;

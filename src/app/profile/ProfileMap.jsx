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
      />
      </div>
    );
  }
}
export default ProfileMap;

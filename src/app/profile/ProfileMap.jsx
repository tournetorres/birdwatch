import React, { Component } from 'react';
import Map, { Marker, InfoWindow } from 'google-maps-react';

class ProfileMap extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location, 'i am big bird');
  }
  render() {
    return (
      <div className="profileMap">
      <Map
      google={this.props.google}
      initialCenter={{ lat: 29.95106579999999, lng: -90.0715323 }}
      //TODO: iterate over data;
      //TODO: create a marker for each item in the data;
      />
      </div>
    );
  }
}
export default ProfileMap;

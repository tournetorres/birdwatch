import React, { Component } from 'react';
import Map, { Marker, InfoWindow } from 'google-maps-react';
import BirdLogo from '../../assets/images/cursorBW.png';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Promise from 'bluebird';

class ProfileMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: []
    };
    this.geoCoder = this.geoCoder.bind(this);
  }
  componentDidMount() {
    let that = this;
    Promise.map(this.props.profileData, function(profile) {
      return that.geoCoder(profile.location);
    }).then(results => this.setState({coords: results})).catch(err => console.error(err));
  }
  geoCoder(value) {
    return geocodeByAddress(value)
    .then(results => getLatLng(results[0]))
    .then((latLng) => {
      return latLng;
    });
  }
  render() {
    return (
      <div className="profileMap">
      <Map
      google={this.props.google}
      initialCenter={{ lat: 29.95106579999999, lng: -90.0715323 }}
      >
      {this.state.coords.map(coord => {
        console.log(coord ,'i am the message for you');
      })}
      {/*{this.props.profileData.map((bird, i, arr) => {
        console.log(bird);
        geocodeByAddress(bird.location)
        .then(results => getLatLng(results[0]))
        .then((latLng) => {
          this.lat = latLng.lat;
          console.log(this.lat, 'im big and lat');
          this.lng = latLng.lng;
          console.log(this.lng, 'im big and lng')
        });
          return (
            <Marker
              key={i}
              icon={BirdLogo}
              position={{ lat: this.lat, lng: this.lng }}
            />
          );
      })}*/}
      </Map>
      </div>
    );
  }
}
export default ProfileMap;

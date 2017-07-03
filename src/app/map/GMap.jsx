import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Map, { Marker, InfoWindow } from 'google-maps-react';

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 12,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  onMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google} 
          zoom={this.state.zoom}
          initialCenter={this.props.latLng}
          center={this.props.latLng}
        >
          {this.props.birdData.map((bird, i) => {
            const ltd = bird.lat;
            const lon = bird.lng;
            return (
              <Marker
                onClick={this.onMarkerClick}
                name={`${bird.comName} (${bird.howMany})`}
                key={i}
                position={{ lat: ltd, lng: lon }}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

GMap.propType = {
  birdData: PropTypes.array.isRequired,
  google: PropTypes.object.isRequired,
};

export default GMap;

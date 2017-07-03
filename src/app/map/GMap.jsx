import React, { Component } from 'react';
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
        {this.props.birdData.map((bird, i, arr) => {
          let ltd = bird.lat;
          let lon = bird.lng;
          return (
            <Marker
              onClick={this.onMarkerClick}
              name={`${bird.comName}(${bird.howMany})`}
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

export default GMap;
// center={this.props.latLng}
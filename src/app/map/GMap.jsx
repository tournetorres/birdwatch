import React, { Component } from 'react';
import Map, { Marker } from 'google-maps-react';
import Search from './Search.jsx';

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 10,
      initCenter: { lat: 29.9574443, lng: -90.06293540000001 },
    };
  }
  render() {
    const style = {
      width: '50vw',
      height: '50vh',
    };
    
    return (
      <div style={style}>
        <Map
          google={this.props.google} 
          zoom={this.state.zoom}
          initialCenter={this.state.initCenter}
        >
        {this.props.birdData.map((bird, i) => {
          let ltd = bird.lat;
          let lon = bird.lng;
          return (
            <Marker
              key={i}
              position={{ lat: ltd, lng: lon }}
            />
          );
        })}
        </Map>
      </div>
    );
  }
}

export default GMap;

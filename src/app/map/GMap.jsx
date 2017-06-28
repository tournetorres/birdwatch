import React, { Component } from 'react';
import Map, { Marker } from 'google-maps-react';


class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 14,
      initCenter: {lat: 29.9574443, lng: -90.06293540000001}
    }
  }
  render() {
    const style = {
      width: '50vw',
      height: '50vh',
    }

    return (
      <div style={style}>
        <Map google={this.props.google} zoom={this.state.zoom} initialCenter={this.state.initCenter}>
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: 29.9574443, lng: -90.06293540000001}} />
        </Map>
      </div>
    );
  }
}

export default GMap;
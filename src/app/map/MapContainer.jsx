import React, { Component } from 'react';

// const MapContainer = () => <h1> Map will go here</h1> 
class MapContainer extends Component{
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    );
  }
}

export default MapContainer;

// export default GoogleApiComponent({
//   apiKey: __GAPI_KEY__,
// })(Container)
import './assets/stylesheets/styles.scss';

// import React from 'react'; 
// import ReactDOM from 'react-dom'; 
// import App from './app/App.jsx'; 

// ReactDOM.render(<App />, document.getElementById('app')); 

class Bird {
  typeOfBird(bird, lat, long) {
    this.latitude = lat;
    this.longitude = long;
    document.write(`I see a ${bird}`);
  }
}
const bluebird = new Bird;
bluebird.typeOfBird('bluebird');

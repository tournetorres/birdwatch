import './assets/stylesheets/styles.scss';

// import React from 'react'; // import the main react dependency
// import ReactDOM from 'react-dom'; // import reactDOM
// import App from './app/App.jsx'; // import the main app component

// ReactDOM.render(<App />, document.getElementById('root')); // render our App component and mount it to our #root element

class Bird {
  typeOfBird(bird, lat, long) {
    this.latitude = lat;
    this.longitude = long;
    document.write(`I see a ${bird}`);
  }
}
const bluebird = new Bird;
bluebird.typeOfBird('bluebird');

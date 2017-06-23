const request = require('request-promise');

const birdAPI = {
  call: (options, cb) => {
    request(`http://ebird.org/ws1.1/data/obs/geo/recent?lng=${options.lng}&lat=${options.lat}&fmt=json&maxResults=10&back=30`)
    .then((data) => {
      cb(data);
    })
    .catch((err) => {
      console.error(err);
    });
  },
};


module.exports = birdAPI;

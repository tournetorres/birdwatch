const express = require('express');
const birdCall = require('./lib/birdApi');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const birdCatcher = (data) => {
  console.log(JSON.parse(data));
};

const obj = { lat: 30.0316211, lng: -90.0365832 };

birdCall.call(obj, birdCatcher);


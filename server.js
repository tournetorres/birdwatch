const express = require('express');
const birdCall = require('./lib/birdApi');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
const db = require('./lib/psql');

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const birdCatcher = (data) => {
  console.log(JSON.parse(data));
};

const obj = { lat: 40, lng: -90 };

birdCall.call(obj, birdCatcher);

const express = require('express');
const birdCall = require('./lib/birdApi');

const db = require('./lib/psql');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {

});

app.post('/signup', (req, res) => {

});

// get birds by location to render on map
app.post('/map', (req, res) => {
  console.log(req.body, 'body');
  const obj = { lat: 30.0316211, lng: -90.0365832 };
  const birdCatcher = (data) => {
    console.log(data);
  };

  birdCall.call(obj, birdCatcher);
});

// get users most recent birds logged in db
app.get('/myBirds', (req, res) => {
  db.getBirdsByUser();
});

const express = require('express');
const birdCall = require('./lib/birdApi');

const db = require('./lib/psql');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const strategy = require('passport-local').Strategy;

const PORT = process.env.PORT;
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret: 'it\'s a secret man',
  resave: false,
  saveUninitiated: true,
}));
app.use(passport.initialize());
app.use(passport.session());


app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

app.use(express.static('public'))

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


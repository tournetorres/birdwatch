const express = require('express');
const birdCall = require('./lib/birdApi');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const strategy = require('passport-local').Strategy;

const PORT = process.env.PORT;
const app = express();
const db = require('./lib/psql');

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

const birdCatcher = (data) => {
  console.log(JSON.parse(data));
};

const obj = { lat: 40, lng: -90 };

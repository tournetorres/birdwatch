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
  app.use(function (req, res, next) {
    console.log(`serving ${req.method} request for uri: ${req.url}`);
    if (req.body) {
      console.log(req.body);
    }
    next();
  });

  app.post('/login', (req, res) => {
    db.getUser(req.body.username)
    .then(data => {
      console.log(data, 'data from users');      
      res.writeHead(200);
      res.end();
    });

  });

  app.post('/signup', (req, res) => {
    db.getUser(req.body.username)
    .then(data => {
      if (data.length === 0) {
        db.createUser(req.body.username, req.body.password)
        .then(data => {
          console.log(data);
          res.writeHead(200);
          res.end();
        });
      }
    })
    .catch(err => console.log(err));
  });

  app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
  });

  app.use(express.static('public'));

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


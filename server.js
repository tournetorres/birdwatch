const express = require('express');
const birdCall = require('./lib/birdApi');
const db = require('./lib/psql');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT;
const app = express();

app.use(function (req, res, next) {
  console.log(`serving ${req.method} request for uri: ${req.url}`);
  if (req.body) {
    console.log(req.body);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'it\'s a secret man',
  resave: false,
}));


app.post('/login', (req, res) => {
  console.log(req.session)
  db.getUser(req.body.username)
  .then(data => {
    if (data.length) {
      let salt = data[0].salt;
      let servPassHash = data[0].password;
      let sentPassHash = bcrypt.hashSync(req.body.password, salt);
      if (sentPassHash === servPassHash) { 
        req.session.regenerate(() => {
          req.session.user = req.body.username;
          res.writeHead(200);
          res.end();
        });
      } else {
        res.writeHead(401);
        res.end();
      }
    } else {
      res.writeHead(401);
      res.end();
    }
  })
  .catch(err => console.log(err));
});

app.post('/signup', (req, res) => {
  db.getUser(req.body.username)
  .then((data) => {
    if (data.length === 0) {
      let salt = bcrypt.genSaltSync(10);
      let hashedPass = bcrypt.hashSync(req.body.password, salt);
      db.createUser(req.body.username, hashedPass, salt)
      .then(data => {
        req.session.regenerate(() => {
          req.session.user = req.body.username;
          res.writeHead(200);
          res.end();
        });
      });
    } else {
      res.writeHead(401);
      res.write('user exists');
      res.end();
    }
  })
  .catch(err => console.log(err));
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    console.log('hit')
    res.writeHead(200);
    res.write('loggedout');
    res.end();
  });
});

app.post('/birds', (req, res) => {
  let user = req.session.user;
  console.log('this is user session', req.session);
  db.getUser(user)
  .then(data => {
    console.log('this is data', data);
    let id = data[0].id;
    db.createBird(req.body.birdType, req.body.location, id)
    .then(data => {
      res.writeHead(200);
      res.write('bird added!');
      res.end();
    });
  });
});

app.post('/map', (req, res) => {
  const latLng = req.body;
  const obj = latLng;
  const birdCatcher = (data) => {
    res.writeHead(200, { contentType: 'application/json' });
    res.write(data);
    res.end();
  };

  birdCall.call(obj, birdCatcher);
});

// get users most recent birds logged in db
app.get('/birds', (req, res) => {
  db.getBirdsInDb(10)
  .then(data => {
    res.writeHead(200);
    res.write(JSON.stringify(data));
    res.end();
  });
});

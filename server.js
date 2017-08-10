const express = require('express');
const birdCall = require('./lib/birdApi');
const db = require('./lib/psql');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const path = require('path');


const PORT = process.env.PORT;
const app = express();

// require('./src-server/multerImpl')(app);

app.use((req, res, next) => {
  console.log(`serving ${req.method} request for uri: ${req.url}`);
  if (req.body) {
    console.log(req.body);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
  // console.log(`Visit http://localhost:3000/example/ to check out the upload example`);
});

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(session({
  secret: 'it\'s a secret man',
  resave: false,
}));


app.post('/login', (req, res) => {
  console.log(req.session);
  db.getUser(req.body.username)
  .then((data) => {
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
    console.log(data);
    if (data.length === 0) {
      const salt = bcrypt.genSaltSync(10);
      const hashedPass = bcrypt.hashSync(req.body.password, salt);
      db.createUser(req.body.username, hashedPass, salt)
      .then((data) => {
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
    console.log('hit');
    res.writeHead(200);
    res.write('loggedout');
    res.end();
  });
});

app.post('/birds', (req, res) => {
  const user = req.session.user;
  console.log(user, 'this is user');
  console.log('this is user session', req.session);
  db.getUser(user)
  .then((data) => {
    console.log('this is data', data);
    const id = data[0].id;
    db.createBird(req.body.birdType, req.body.location, id, req.body.image)
    .then((d) => {
      console.log(d, 'dizzlefrizzle');
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
  db.getBirdsInDb(20)
  .then((data) => {
    res.writeHead(200);
    res.write(JSON.stringify(data));
    res.end();
  });
});

app.get('/getProfile', (req, res) => {
  db.getUser(req.session.user)
  .then((data) => {
    console.log(data);
    const id = data[0].id;
    db.getBirdsByUser(id)
    .then((data) => {
      res.writeHead(200);
      res.write(JSON.stringify(data));
      console.log('ending');
      res.end();
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

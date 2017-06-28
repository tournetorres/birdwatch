const pg = require('pg');
const Promise = require('bluebird');
const passport = require('passport');

const connectionString = process.env.PSQL;
const pgClient = new pg.Client(connectionString);
const pgp = require('pg-promise')();

const cn = {
    host: 'pellefant.db.elephantsql.com', // server name or IP address;
    port: 5432,
    database: 'vtzaozly',
    user: 'vtzaozly',
    password: 'TrdAjdoi_Esmw5iojs7Z-WfPK0lZM0n9'
};

const db = pgp(cn);


// export an object with query functions, promisified
module.exports = {

  // get user by username
  getUser: (username) => 
    db.any('SELECT * FROM users WHERE username = $1', [username]),

  // create user
  createUser: (user, password) =>
    db.any('INSERT INTO public.users (username, password) VALUES ($1, $2)', [user, password]),
    // new Promise((resolve, reject) => 
    //   pgClient.query('INSERT INTO users (username, password) VALUES ($1, $2)', [user, password], (err, result) => {
    //     if (err) {
    //       reject(err);
    //     } else {
    //       resolve(result);
    //     }
    //   });
    // }),

  // get list of birds by user, and lng/lat range, where ranges are an array of min/max's
  // requires a username id, not username
  getBirdsByUser: (usernameId, latRange, lngRange) =>
    new Promise((resolve, reject) => {
      pgClient.query('SELECT * FROM birds WHERE username_id = $1 AND lat > $2 AND lat < $3 AND lng > $4 and lng < $5',
        [usernameId, ...latRange, ...lngRange], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
    }),

  // get all birds in loc regardless of user, where ranges are an array of min/max's
  getBirdsByLoc: (latRange, lngRange, bird) =>
    new Promise((resolve, reject) => {
      pgClient.query('SELECT * FROM birds WHERE bird = $1 AND lat > $2 AND lat < $3 AND lng > $4 and lng < $5',
        [bird, ...latRange, ...lngRange], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
    }),

  // insert new bird into DB, must have bird, user_id, lat, lng
  createBird: (bird, user, lat, lng) =>
    new Promise((resolve, reject) => {
      pgClient.query('INSERT INTO birds (birdname, lng, lat, username_id) VALUES ($1, $2, $3, $4)',
        [bird, lng, lat, user], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    }),
};

const promise = require('bluebird');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = process.env.Postgres_URL || 'postgresql://jeremyvela:javraw092492@localhost:53394/rollin_eats_development'
const db = pgp(connectionString);

module.exports = db

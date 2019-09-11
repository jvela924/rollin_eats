const promise = require('bluebird');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL ||  'postgresql://postgres:javraw092492@localhost:5432/foodtrucks';
const db =pgp(connectionString);

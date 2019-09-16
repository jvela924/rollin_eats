const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require('../db/db')

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log('Getting all foodtrucks');
  db.any('SELECT * from users LEFT JOIN foodtrucks ON foodtrucks.id = users.foodtruck_id')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved all users'
      });
    }).catch((err) => {
      return next(err);
    })
});

// router.post('/', (req, res, next) => {
//   const {username, password} = request.body
//   db.any('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password])
//     .then((data) => {
//       res.status(200).json({
//         status: 'success',
//         data: data,
//         message: 'Retrieved all users'
//       });
//     }).catch((err) => {
//       return next(err);
//     })
// });

module.exports = router;

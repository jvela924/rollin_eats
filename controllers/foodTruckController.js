const express = require('express');
const router = express.Router()
const db = require('../db/db')

// Get Foodtrucks
router.get('/', (eq, res, next) => {
  console.log('Getting all foodtrucks');
  db.any('select * from foodtrucks')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved all foodtrucks'
      });
    }).catch((err) => {
      return next(err);
    })

});
module.exports = router;

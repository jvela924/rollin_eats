const express = require('express');
const router = express.Router()
const db = require('../db/db')

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log('Getting all foodtrucks');
  db.any('select pic1,pic2,pic3,pic4,pic5,pic6 from foodtrucks')
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

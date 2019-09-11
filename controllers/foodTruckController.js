const express = require('express');
const router = express.Router()
const db = require('../db/db.js')

// Get Foodtrucks
router.get('/' , (req, res) => {
  console.log('hello');
})

module.exports = router;

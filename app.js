// Dependencies //
const express = require('express');
const morgan = require('morgan');
const promise = require('bluebird');
const app = express ();

// Middleware //
app.use(express.static('./index.html'));
app.use(morgan('tiny'));

const foodTrucksController = require('./controllers/foodTruckController.js');
app.use('/foodtrucks', foodTrucksController)

// Port //
const PORT = process.env.PORT || 3000;

// app.use(session({
//     secret: "chickenwafflesurprise", //some random string
//     resave: false,
//     saveUninitialized: false
// }));

// Listener //
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = process.env.PORT || 3000;
const app = express();

const foodtrucksRouter = require('./routes/foodtrucks.js');
const usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/foodtrucks', foodtrucksRouter);
app.use('/pics', usersRouter);


app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname+'/client/build/index.html'))
})


// Listener
app.listen(port, () => console.log('Listening on port ${port}'));

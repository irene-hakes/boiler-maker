const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan');

//logging middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./api'))

//any routes or other varioius middlewares should go here!

//make sure this is right at the end of your server logic!
//the only thing after this might be a piece of middleware to serve up 500 errors for server problems
//(however, if you have middleware to serve up 404s, that would go before this as well)

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//error handling middleware (MAKE SURE IT'S AT THE END)
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app

'use strict';

const express = require('express');
const app = express();

app.get('/a', (req, res) => {
  res.status(200).send('Route A');
});

// Force an error
const barf = (req, res, next) => next('throws an error');
app.get('/e', barf, (req, res) => {
  res.status(200).send('Route D');
});

// Not Found
app.use('*', (req, res) => {
  res.status(404).send('Not Found!');
});

// Errors
app.use((err, req, res, next) => {
  next && null; // To avoid eslint errors
  res.status(500).send(err);
});

// In order to run tests, we must export the express 'app' as part of an object
// Additionally, because we're now a module and not a standalone app, we need to export a start() method
// and let something else require and start us up with whatever port it wants

module.exports = {
  barf,
  server: app,
  start: port => {
    const PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

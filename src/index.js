require('module-alias/register');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const {ValidationError} = require('objection');
const knex = require('@/src/server/bootstrap/database');
const {Model} = require('objection');
const userRoutes = require('@/src/server/routes/user');
const bookRoutes = require('@/src/server/routes/book');
const borrowRoutes = require('@/src/server/routes/borrow');

Model.knex(knex);

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/', borrowRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).json({
      message: 'Validation error',
      errors: err.data,
    });
  } else {
    res.status(err.statusCode || 500).json({
      message: err.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app

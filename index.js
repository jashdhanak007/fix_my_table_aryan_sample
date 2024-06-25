const express = require('express');
const { Sequelize } = require('sequelize');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Sequelize setup
const sequelize = new Sequelize('u816834732_fixmytable', 'u816834732_fixmytable', 'abcdfixmytable!1A', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

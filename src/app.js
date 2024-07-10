const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Database connection
const dbConnection = require('./config/database');

dotenv.config();
const app = express();

// Middleware for CORS and JSON
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// welcome message
app.get('/', function (req, res) {
  res.send('Server is running ');
});

// User routes



module.exports = app;
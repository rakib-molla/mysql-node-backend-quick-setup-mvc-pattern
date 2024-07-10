const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const config = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};


// Create a MySQL database connection
const dbConnection = mysql.createConnection(config);

// Connect to the database
dbConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the  database');
  }
});

const dbConnectionPool = mysql.createPool(config);


// Test the database connection pool
dbConnectionPool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database pool:', err);
  } else {
    console.log('Connected to the database pool');
    connection.release(); // Release the connection back to the pool
  }
});

module.exports = dbConnection;

module.exports = { dbConnectionPool, dbConnection };

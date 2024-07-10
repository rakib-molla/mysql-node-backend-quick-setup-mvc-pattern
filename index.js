const express = require('express');
const app = require('./src/app');

const port = process.env.PORT || 5000; // Use PORT for server, not DB_PORT


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



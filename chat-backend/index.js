const express = require('express');

const config = require('./config/app');

require('dotenv').config();

const app = express();

const port = config.appPort;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

console.log('Hello world');

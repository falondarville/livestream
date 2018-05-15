const express = require('express');
const path = require('path');
const nodemon = require('nodemon');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views' + '/index.html'));
});

app.use('/', express.static('public'));

app.listen(PORT, function() {
  console.log(`The server is up and running on port: ${PORT} .`);
});
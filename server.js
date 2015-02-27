
var express = require('express');
var app = express();
var http = require('http');
var Path = require('path');
app.use(express.static(Path.join(__dirname, 'dist')));
http.createServer(app).listen(3000, function() {
  console.log('Access http://localhost:3000');
});

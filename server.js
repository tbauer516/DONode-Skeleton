var express = require('express');
var compression = require('compression');
var app = express();


// Server Hosting Code Below

var oneDay = 86400000;

app.use(compression());

app.use('/', express.static(__dirname + '/public', {maxAge: oneDay}));

var port = 8108;

app.listen(port, function() {
  console.log(`Application worker ${process.pid} started...`);
});
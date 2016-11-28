var express = require('express');
var compression = require('compression');
var app = express();
//var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/portfolio');

var oneDay = 86400000;

app.use(compression());

app.use('/', express.static(__dirname + '/public', {maxAge: oneDay}));

var port = 8108;//process.env.OPENSHIFT_NODEJS_PORT || 8000;

app.listen(port, function() {//, ipadress, function() {
  console.log(`Application worker ${process.pid} started...`);
});
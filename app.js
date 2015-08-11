var fs = require('fs');

var express = require('express');
var bodyParser = require('body-parser');

var artists = require('./routes/artists');

var app = express();

require('./lib/mongodb');

app.set('view engine', 'ejs');

app.locals.title = 'NodeTunes';
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', artists);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

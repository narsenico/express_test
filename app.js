var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();

// serve static files
app.use(express.static('app'));
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(multer());

// GET
app.get('/login/:user', function (req, res) {
  res.json( { user: req.params.user || 'anonymous', role: 'A' } );
});

// POST
app.post('/login', function (req, res) {
	console.log('post login', req.body);
	if (req.body.user == req.body.password) {
		res.status(200).json( {resp: 'ok'} );
	} else {
		res.status(200).json( {resp: 'not authorized'} );
	}
});

// create server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
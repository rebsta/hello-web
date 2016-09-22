var express = require('express'); //Import express module and store in a variable
var app = express();

var server = app.listen(3000, function () { // a callback - will be called when app is ready!
	console.log('The app is listening on http://localhost:3000');
});

// Route = what happens in the browser when we go here?

app.get('/', function (req, res) { //incoming request, response to send out 
	res.send('Hello Web!');

});
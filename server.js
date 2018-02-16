// set up ======================================================================
const mongoose = require('mongoose'); 
const database = require('./config/database');
const express  = require('express');
const app      = express(); 								// create our app w/ express
const port     = process.env.PORT || 8080; 				// set the port

app.configure(function() {
	app.use(express.static(__dirname)); 		// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
	app.use(express.methodOverride()); 						// simulate DELETE and PUT
});

// configuration ===============================================================
mongoose.connect(database.url);

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

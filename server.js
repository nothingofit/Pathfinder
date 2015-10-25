// require express and path
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var passport = require("passport");
var expressSession = require('express-session');

// create the express app
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(expressSession({secret: "Coding Dojo N"}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
	done(null, user_id);
});
passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user);
	})
})

require('./config/mongoose.js'); //this always comes before routes!
require('./config/routes.js')(app);

// static content
app.use(express.static(path.join(__dirname, "./client")));
// setting up ejs and our views folder

var server = app.listen(8000);

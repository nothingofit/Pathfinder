// require express and path
var express = require("express");
var path = require("path");
// var mongoose = require("mongoose");

// create the express app
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// require('./config/mongoose.js'); //this always comes before routes!
require('./config/mongoose.js');
require('./config/routes.js')(app);


// static content
app.use(express.static(path.join(__dirname, "./client")));
// setting up ejs and our views folder


var port = process.env.PORT || 2000;

var server = app.listen(port, function(){
  console.log("Listening on port 2000.");
});
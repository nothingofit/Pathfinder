//Includes
var cps = require('cps-api');

//Creating a CPS connection
var cpsConn = new cps.Connection(  'tcps://cloud-us-0.clusterpoint.com:9008', 'hackingEDU', 'davidjosuejimenez@hotmail.com', 'codingDojoN', 'document', 'document/id', {account: 102323});

// Debug
cpsConn.debug = true;

// Chegg Controller
var Chegg = require("../server/controllers/chegg_controller.js");

module.exports = function(app) {
	app.post('/user/find', function(req, res){

		console.log(req.body)
		// Insert
		var obj = {
		   id: req.body.username,
		   company: req.body.company,
		   name: req.body.name,
		   password: req.body.password,
		   date: new Date()
		};
		var documents = [obj];
		cpsConn.sendRequest(new cps.InsertRequest(documents), function (err, resp) {
		   if (err) {
			    console.error(err); // Handle error
				res.json({"error": "Error from db"});
		   } else {
			   res.json(req.body);
		   }
		});

	});
	app.post('/user/findOne', function(req, res){

		console.log(req.body);
		var query = cps.Term(req.body.username, "id");
		var docs = 1;
		var searchRequest = new cps.SearchRequest(query, docs);

		cpsConn.sendRequest(searchRequest, function (err, searchResponse) {
		  if (err) {
			  console.log(err);
			  res.json({"error": "Error from db"});
		  } else {
			  console.log(searchResponse);
			  console.log("^ search response");
			  res.end();
		  }

		});

	});

	app.get('/chegg/title_search/:title', function(req,res){
		Chegg.titleSearch(req,res);
	});

	app.get('/chegg/ean_search/:ean', function(req,res){
		Chegg.eanSearch(req,res);
	});

}

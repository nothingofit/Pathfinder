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

		String.prototype.hashCode = function() {
		  var hash = 0, i, chr, len;
		  if (this.length == 0) return hash;
		  for (i = 0, len = this.length; i < len; i++) {
		    chr   = this.charCodeAt(i);
		    hash  = ((hash << 5) - hash) + chr;
		    hash |= 0; // Convert to 32bit integer
		  }
		  return hash;
		};

		console.log(req.body)
		// Insert
		var obj = {
		   id: req.body.username,
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

	app.get('/chegg/title_search/:title', function(req,res){
		Chegg.titleSearch(req,res);
	});

	app.get('/chegg/ean_search/:ean', function(req,res){
		Chegg.eanSearch(req,res);
	});

}


// Chegg Controller
var Chegg = require("../server/controllers/chegg_controller.js");

var Fields = require("../server/controllers/fields_controller.js");

module.exports = function(app) {
	
	app.get('/chegg/title_search/:title', function(req,res){
		Chegg.titleSearch(req,res);
	});

	app.get('/chegg/ean_search/:ean', function(req,res){
		Chegg.eanSearch(req,res);
	});

	app.post('/fields', function(req,res){
		Fields.addNewField(req,res);
	});

	app.get('/fields', function(req,res){
		console.log("DING routes '/fields'");
		Fields.getAllFields(req,res);
	});

}

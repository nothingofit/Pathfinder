
// Chegg Controller
var Chegg = require("../server/controllers/chegg_controller.js");

var Fields = require("../server/controllers/fields_controller.js");

var Careers = require("../server/controllers/careers_controller.js");

var Skills = require("../server/controllers/skills_controller.js");

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

	app.get('/careers/:selectedFields', function(req,res){
		console.log("DING routes '/careers/:selectedFields'");
		Careers.getCareersByFields(req,res);
	});

	app.post('/careers', function(req,res){
		console.log("DING routes '/careers'");
		Careers.addNewCareer(req,res);
	});

	app.post('/skills', function(req,res){
		console.log("DING routes '/skills'");
		Skills.addNewSkill(req,res);
	});

	app.get('/skills', function(req,res){
		console.log("DING routes get '/skills'");
		Skills.getAllSkills(req,res);
	});

}

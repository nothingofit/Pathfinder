var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/chooseToLearn');

var modelsPath = __dirname + '/../server/models';

fs.readdirSync(modelsPath).forEach(function(file){
	if (file.indexOf('.js') > 0){
		require(modelsPath + '/' + file);
	}
});

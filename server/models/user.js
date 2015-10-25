var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: String,
	password: String,
	created_at: {type: Date, default: new Date}
});

mongoose.model('Users', userSchema);

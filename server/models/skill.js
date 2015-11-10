var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var skillSchema = new mongoose.Schema({
  name: String,
  created_at: {type: Date, default: new Date}
});

mongoose.model('Skill', skillSchema);

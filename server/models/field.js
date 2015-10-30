var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var fieldSchema = new mongoose.Schema({
  name: String,
  created_at: {type: Date, default: new Date}
});

mongoose.model('Field', fieldSchema);

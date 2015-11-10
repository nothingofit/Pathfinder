var mongoose = require('mongoose');

var careerSchema = new mongoose.Schema({
  title: String,
  fields: [String],
  skills: [String],
  created_at: {type: Date, default: new Date}
});

mongoose.model('Career', careerSchema);

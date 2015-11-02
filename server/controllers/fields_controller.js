var mongoose = require('mongoose');
var Field = mongoose.model('Field');

module.exports = (function(){
  return {
    addNewField(req,res){
      var field = new Field(req.body);

      field.save(function(err, result){
        if(err){
          console.log("Error adding field.");
        } else {
          console.log("Field added.");
        }
      });
    },

    getAllFields(req,res){
      Field.find({}, function(err, results){
        // console.log("Found fields: " + results);
        res.json(results);
      });
    }
  }
})();
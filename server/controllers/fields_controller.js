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
    }
  }
})();
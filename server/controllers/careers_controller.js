var mongoose = require('mongoose');
var Career = mongoose.model('Career');

module.exports = (function(){
  return {
    addNewCareer(req,res){
      var career = new Career(req.body);

      career.save(function(err, result){
        if(err){
          console.log("Error adding career.");
          console.log("Error:", err);
        } else {
          console.log("Career added.");
        }
      });
    },

    getAllCareers(req,res){
      Career.find({}, function(err, results){
        // console.log("Found fields: " + results);
        res.json(results);
      });
    },

    getCareersByFields(req,res){
      var fields = req.params.selectedFields.split("&");

      var query = [];

      for (var i = 0; i < fields.length; i++) {
        query.push({
          fields: fields[i]
        });
      }

      console.log("Query:", query);

      Career.find({
        $or: query
      }, function(err, results){
        if(err){
          console.log("Could not retrieve careers.");
          console.log("Error:", err);
        } else {
          res.json(results);
        }
      })
    }
  }
})();
var mongoose = require('mongoose');
var Skill = mongoose.model('Skill');

module.exports = (function(){
  return {
    addNewSkill(req,res){
      var skill = new Skill(req.body);

      // console.log("Skill:", req.body);

      skill.save(function(err, result){
        if(err){
          console.log("Error adding skill.");
          console.log("Error:", err);
        } else {
          console.log("Skill added.");
          console.log("Result:", result);
        }
      });
    },

    getAllSkills(req,res){
      Skill.find({}, function(err, results){
        // console.log("Found fields: " + results);
        res.json(results);
      });
    }
  }
})();
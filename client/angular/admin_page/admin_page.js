app.controller("adminController", function($scope, adminFactory, fieldsListFactory){

  $scope.allFields = [];

  $scope.newCareer = {};
  $scope.newCareer.skills = [];

  $scope.newSkill = {};

  $scope.allSkills;

  fieldsListFactory.getAllFields(function(fields){
   for (var i = 0; i < fields.length; i++) {

    if(fields[i].disabled != true){
      $scope.allFields.push(fields[i]); 
    }
     
   };
   console.log($scope.allFields);

  });

  $scope.toggleFieldSelection = function(fieldName){

    if($scope.newCareer.fields === undefined) {
      $scope.newCareer.fields = [];
    }

    var indexOfField = $scope.newCareer.fields.indexOf(fieldName);

    if(indexOfField === -1){
      $scope.newCareer.fields.push(fieldName);
    } else {
      $scope.newCareer.fields.splice(indexOfField, 1);
    }
    // $scope.$apply;
    // refreshShownFields();
    console.log($scope.newCareer.fields);
  }

  adminFactory.getAllSkills(function(skills){
    $scope.allSkills = skills;
    console.log("Skills:", $scope.allSkills);
  });

  $scope.submitNewField = function(){
    adminFactory.submitNewField($scope.newField);
    $scope.newField = {};
  }

  $scope.submitNewCareer = function(){
    adminFactory.submitNewCareer($scope.newCareer);
    $scope.newCareer = {};
    $scope.newCareer.skills = [];
  }

  $scope.submitNewSkill = function(){
    adminFactory.submitNewSkill($scope.newSkill);
    $scope.newSkill = {};
  }
})

app.factory("adminFactory", function($http){
  return {

    submitNewField(newField){
      $http.post("/fields", newField).success(function(){
        console.log("Field Added.");
      });
    },

    submitNewCareer(newCareer){
      $http.post("/careers", newCareer).success(function(){
        console.log("Career Added.");
      });
    },

    submitNewSkill(newSkill){
      $http.post("/skills", newSkill).success(function(){
        console.log("Skill Added.");
      });
    },

    getAllSkills(setInScope){
      $http.get("/skills").success(function(skills){
        
        setInScope(skills);
        
      });
    }
  }
});
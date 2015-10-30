app.controller("adminController", function($scope, adminFactory){

  $scope.submitNewField = function(){
    adminFactory.submitNewField($scope.newField);
    $scope.newField = {};
  }
})

app.factory("adminFactory", function($http){
  return {

    submitNewField(newField){
      $http.post("/fields", newField).success(function(){
        console.log("Field Added.");
      })
    }
  }
});
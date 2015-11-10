app.controller("careersListController", function($scope, $location, $routeParams, careersListFactory){

  $scope.fields = $routeParams.fields.split("&");

  $scope.viewPosition = function(career){
    $location.path("/careers/" + career);
  }

  careersListFactory.getCareersByFields($routeParams.fields, function(results){
    $scope.careers = results;
    console.log("Careers:", $scope.careers);
  });

})

app.factory("careersListFactory", function($http){

  return {
    getCareersByFields(selectedFields, setInScope) {
      $http.get("/careers/"+selectedFields).success(function(results){
        setInScope(results);
      });
    }
  }
})
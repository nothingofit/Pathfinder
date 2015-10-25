app.controller('addCareerController', function($scope, $routeParams, $location){
  $scope.company = $routeParams.company;

  $scope.addNewCareer = function(newCareer){
    console.log(newCareer);
    $scope.newCareer = {};
    $location.path("/companies/" + $scope.company);
  }
})
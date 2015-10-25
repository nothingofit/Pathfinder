app.controller('manageListingsController', function($scope, $routeParams, $location){

  $scope.company = $routeParams.company;

  $scope.addNewListing = function(newListing) {
    console.log(newListing);
    $scope.newListing = {};
    $location.path("/companies/" + $scope.company);
  }
})
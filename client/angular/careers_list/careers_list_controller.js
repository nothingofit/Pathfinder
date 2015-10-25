app.controller("careersListController", function($scope, $location, $routeParams){

  $scope.fields = $routeParams.fields.split("&");

  $scope.viewPosition = function(career){
    $location.path("/careers/" + career);
  }

})
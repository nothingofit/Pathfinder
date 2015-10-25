app.controller('editProfileController', function($scope, $location, $routeParams){

  var userId = $routeParams.id;

  $scope.saveProfile = function(profile){
    console.log(profile);
    $location.path("/users/" + userId);
  }

});
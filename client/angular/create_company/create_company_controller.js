app.controller('createCompanyController', function($scope, $location){


  $scope.registerNewCompany = function(newCompany){
    console.log(newCompany);
    // $scope.newCompany = {};
    $location.path("/companies/" + $scope.newCompany['name']);
  }
})
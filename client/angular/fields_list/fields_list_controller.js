app.controller("fieldsListController", function($scope, $location, fieldsListFactory){

  $scope.selectedFields = [];
  $scope.shownFields = "";

  function refreshShownFields() {
    var shownFieldsTemp = "";
    for(var i = 0; i < $scope.selectedFields.length; i++) {
      shownFieldsTemp += $scope.selectedFields[i]+'&';
    }
    $scope.shownFields = shownFieldsTemp.substring(0, shownFieldsTemp.length - 1);
  }

  $scope.addSelectedField = function(field){

    var indexOfField = $scope.selectedFields.indexOf(field);
    if(indexOfField === -1){
      $scope.selectedFields.push(field);  
    } else {
      $scope.selectedFields.splice(indexOfField, 1);
    }
    $scope.$apply;
    refreshShownFields();
  }

  $scope.submitFields = function(){
    $location.path("/careers_list/" + $scope.shownFields);
  }

  fieldsListFactory.getAllFields(function(fields){
    $scope.allFields = fields;
  });

});

app.factory("fieldsListFactory", function($http){
  return {
    getAllFields(setFieldScope){
      $http.get("/fields").success(function(fields){
        setFieldScope(fields);
      })
    }
  }
})
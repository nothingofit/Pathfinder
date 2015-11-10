app.controller("fieldsListController", function($scope, $location, fieldsListFactory){

  $scope.selectedFields = [];
  $scope.shownFields = "";

  $scope.allFields = [];

  function refreshShownFields() {
    var shownFieldsTemp = "";
    for(var i = 0; i < $scope.selectedFields.length; i++) {
      shownFieldsTemp += $scope.selectedFields[i]+'&';
    }
    $scope.shownFields = shownFieldsTemp.substring(0, shownFieldsTemp.length - 1);
  }

  $scope.addSelectedField = function(field){

    // No response if disabled.
    if(field.disabled === "disabled") {
      return false;
    }

    field.selected = field.selected == "" ? "list-group-item-primary" : "";

    var indexOfField = $scope.selectedFields.indexOf(field.name);

    if(indexOfField === -1){
      $scope.selectedFields.push(field.name);
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
   for (var i = 0; i < fields.length; i++) {

    var column = Math.floor(i/4);

    fields[i].selected = "";

    // Sets disabled class if disabled.
    
    if(fields[i].disabled === true){
      fields[i].disabled = "disabled";
    }

    if(!$scope.allFields[column]){
    $scope.allFields[column] = [];
    }
    $scope.allFields[column].push(fields[i]);
   };
   console.log($scope.allFields);
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
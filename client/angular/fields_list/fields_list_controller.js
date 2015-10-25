app.controller("fieldsListController", function($scope, $location){

  var selectedFields = [];
  $scope.shownFields = "";

  function refreshShownFields() {
    $scope.shownFields = "";
    for(var i = 0; i < selectedFields.length; i++) {
      $scope.shownFields += selectedFields[i]+'&';
    }
    $scope.shownFields = $scope.shownFields.substring(0, $scope.shownFields.length - 1);
  }

  $scope.addSelectedField = function(field){

    var indexOfField = selectedFields.indexOf(field);
    if(indexOfField === -1){
      selectedFields.push(field);  
    } else {
      selectedFields.splice(indexOfField, 1);
    }

    refreshShownFields();
  }

  $scope.submitFields = function(){
    $location.path("/choose/" + $scope.shownFields);
  }

})
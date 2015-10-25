app.controller("fieldsListController", function($scope, $location){

  var selectedFields = [];
  $scope.shownFields = "";

  function refreshShownFields() {
    var shownFieldsTemp = "";
    for(var i = 0; i < selectedFields.length; i++) {
      shownFieldsTemp += selectedFields[i]+'&';
    }
    $scope.shownFields = shownFieldsTemp.substring(0, shownFieldsTemp.length - 1);
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
    $location.path("/careers_list/" + $scope.shownFields);
  }

})
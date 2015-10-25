app.controller('skillProfileController', function($scope, $routeParams, $http, skillProfileFactory){

  $scope.skill = $routeParams.skill;

  $scope.relevantBooks = [];

  skillProfileFactory.getCheggByTitle($scope.skill, function(result){
    var bookResults = result.result[0].textbooks.responseContent.docs;

    for(var i = 0; i < 10; i++) {
      skillProfileFactory.getCheggByEAN(bookResults[i].ean, function(result2){
        // console.log(result2[0]);
        var bookInfo = result2[0];
        var bookObject = {
          "title": bookInfo.title,
          "year": bookInfo.copyright,
          "author": bookInfo.primaryAuthor
        }
        // console.log("Book Object:",bookObject);
        $scope.relevantBooks.push(bookObject);
      })
    }  
  });
  
})

app.factory('skillProfileFactory', function($http){

  return {
    getCheggByTitle(title, callback){
      $http.get("/chegg/title_search/" + title).success(function(result){
        // for(var i = 0; i < 10; i++){
        //   console.log(i);
        // }
        callback(result)
      });
    },

    getCheggByEAN(ean, callback){
      $http.get("/chegg/ean_search/" + ean).success(function(result){
        callback(result);
      })
    }
  }

});
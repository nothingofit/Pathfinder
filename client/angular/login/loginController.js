app.controller('loginController', function($scope, loginFactory, $location){

	$scope.loginClick = function(){
		loginFactory.findUser($scope.login, function(data){
			if (data.error) {
				alert("Error registering user");
			} else {
				window.localStorage.user = JSON.stringify(data);
				console.log("succesfull");
				console.log(window.localStorage.user);
				$location.path('/userprofile');
			}
		})

	}

})

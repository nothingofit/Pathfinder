app.controller('companyLoginController', function($scope, companyLoginFactory, $location){

	$scope.loginClick = function(){
		companyLoginFactory.findUser($scope.login, function(data){
			if (data.error) {
				alert("Error registering user");
			} else {
				window.localStorage.user = JSON.stringify(data);
				console.log("succesfull");
				console.log(window.localStorage.user);
				$location.path('/companies/' + data.name);
			}
		})

	}

})

app.controller('loginController', function($scope, loginFactory){

	$scope.loginClick = function(){
		// loginFactory.findUser($scope.login, function(data){
		// 	console.log(data);
		// })
		$.ajax({
			url       : 'https://api-us.clusterpoint.com/v4/102323/hackingEDU/_query',
			type      : 'POST',
			dataType  : 'json',
			data      : 'SELECT * FROM hackingEDU WHERE "username" == ' + $scope.login.username,
			beforeSend: function (xhr) {
				xhr.setRequestHeader('Authorization', 'Basic ' + btoa('davidjosuejimenez@hotmail.com:codingDojoN'));
			},
			success   : function (data) {
				if (typeof success != 'undefined') {
					success(data);
					console.log(data);
				}
			},
			fail      : function (data) {
				alert(data.error);
				if (typeof fail != 'undefined') {
					fail(data);
				}
			}
		}).done(function(data){
			console.log(data);
		});
	}

})

app.factory('companyLoginFactory', function($http){

			var factory = {};

			factory.findUser = function(info, callback){
				$http.post('/user/findOne', info).success(function(output){
					callback(output);
				})
			}

			return factory;
		})

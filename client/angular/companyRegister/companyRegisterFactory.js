app.factory('companyRegisterFactory', function($http){

			var factory = {};

			factory.findUser = function(info, callback){
				info.company = true;
				$http.post('/user/find', info).success(function(output){
					callback(output);
				})
			}

			return factory;
		})

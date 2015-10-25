var http = require('http');

module.exports = function(app) {
	app.post('/user/find', function(req, res){
		console.log(req.body)
		var options = {
			host: 'api-us.clusterpoint.com',
			path: '/v4/102323/hackingEDU/_query',
			// content: {
			// 	"username": req.body.username,
			// 	"password": req.body.passsword
			// },
			data: "SELECT * FROM hackingEDU",
			method: 'POST',
			dataType: 'json',
			// Authorization: "Basic ZGF2aWRqb3N1ZWppbWVuZXpAaG90bWFpbC5jb206Y29kaW5nRG9qb04="
			headers: {'Authorization': 'Basic ZGF2aWRqb3N1ZWppbWVuZXpAaG90bWFpbC5jb206Y29kaW5nRG9qb04='}
		}

		var callback = function(response) {
		  var str;

		  //another chunk of data has been recieved, so append it to `str`
		  response.on('data', function (chunk) {
		    str += chunk;
		  });

		  //the whole response has been recieved, so we just print it out here
		  response.on('end', function () {
		    console.log(str);
			console.log("after responding with JSON")
			res.json({"hopefully": "It worked"});
			console.log("after resoponding with JSON");
		  });
		}

		http.request(options, callback).end();

		console.log("This should not run. last")
	})
}



module.exports = (function(){
  return {
    titleSearch(req,res) {

      var title = req.params.title;
      console.log("Requesting Title '"+title+"' from Chegg.");

      var bookData;

      var out = {};

      findByTitle(title);

      function findByTitle(title){     
        var http = require("https");

        var data;
  
        var options = {
          "method": "GET",
          "hostname": "hackingedu.chegg.com",
          "port": null,
          "path": "/hacking-edu/search?q="+title,
          "headers": {
            "accept": "application/json",
            "authorization": "Basic UVZaNllFMHliQ1J5RE9NNUc1ZHQ2WUY2aHFkd0V3Qmo6dDdpeGpzRWFHaFE1 WWhhcA==",
            "cache-control": "no-cache",
            "postman-token": "e0365673-d519-7e86-3c34-39274952fcf5"
          }
        };
  
        var req = http.request(options, function (result) {
          var chunks = [];
  
          result.on("data", function (chunk) {
            chunks.push(chunk);
          });
  
          result.on("end", function () {
            var body = Buffer.concat(chunks);
  
            res.send(body);
            // callback(body);  
            // console.log("Body:",body);
  
            // var resultArray = body.result[0].textbooks.responseContent.docs;
            
  
            // var books = [];
  
            // for(var i = 0; i < 10; i++){
            //   console.log("EAN: " + resultArray[i].ean);
            //   eanSearch(resultArray[i].ean, function(book){
            //     books.push(book);
            //   });
            // }
            // res.send(books);
          });
        });
  
        req.end();

      }
  },
  eanSearch(req,res){

    var ean = req.params.ean;

    findByEAN(ean);

    function findByEAN(EAN){

        var http = require("https");

        var options = {
          "method": "GET",
          "hostname": "hackingedu.chegg.com",
          "port": null,
          "path": "/hacking-edu/catalog/priced/byEan/"+EAN,
          "headers": {
            "accept": "application/json",
            "content-type": "application/json",
            "authorization": "Basic UVZaNllFMHliQ1J5RE9NNUc1ZHQ2WUY2aHFkd0V3Qmo6dDdpeGpzRWFHaFE1 WWhhcA==",
            "cache-control": "no-cache",
            "postman-token": "da2a7a6c-5e6d-8284-46b2-3064366bb14a"
          }
        };
        var req = http.request(options, function (response) {
          var chunks = [];
          response.on("data", function (chunk) {
            chunks.push(chunk);
          });
          response.on("end", function () {
            var body = Buffer.concat(chunks);
            res.send(body);
          });
        });
        req.end();
      }
    }
  }

})();
var app = angular.module('app', ['ngRoute']);
console.log("HI");
app.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html'
    })
    .when('/fields', {
      templateUrl: '/partials/fields.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

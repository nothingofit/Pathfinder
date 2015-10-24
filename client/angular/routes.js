var app = angular.module('app', ['ngRoute']);
console.log("HI");
app.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

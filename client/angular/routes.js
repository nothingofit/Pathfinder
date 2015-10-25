var app = angular.module('app', ['ngRoute']);
app.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html'
    })
    .when('/fields', {
      templateUrl: '/partials/fields.html'
    })
    .when('/choose', {
      templateUrl: '/partials/choose.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

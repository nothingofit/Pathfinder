var app = angular.module('app', ['ngRoute']);
app.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/angular/homepage/main.html'
    })
    .when('/fields', {
      templateUrl: '/angular/fields_list/fields.html'
    })
    .when('/choose', {
      templateUrl: '/angular/choose_position/choose.html'
    })
    .when('/view', {
      templateUrl: '/angular/view_jobs_available/view.html'
    })
    .when('/editprofile', {
      templateUrl: '/angular/edit_profile/editprofile.html'
    })
    .when('/jobprofile', {
      templateUrl: '/angular/job_profile/jobprofile.html'
    })
    .when('/loginSuccess', {
      templateUrl: '/partials/success.html'
    })
    .when('/loginSuccess', {
      templateUrl: '/partials/success.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

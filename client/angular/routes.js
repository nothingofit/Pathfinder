var app = angular.module('app', ['ngRoute']);
app.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/angular/homepage/main.html'
    })
    .when('/fields', {
      templateUrl: '/angular/fields_list/fields.html',
      controller: 'fieldsListController'
    })
    .when('/careers_list/:fields', {
      templateUrl: '/angular/careers_list/careers_list.html',
      controller: 'careersListController'
    })
    .when('/careers/:career', {
      templateUrl: '/angular/positions_list/positions_list.html',
      controller: 'positionsListController'
    })
    .when('/editprofile', {
      templateUrl: '/angular/edit_profile/editprofile.html'
    })
    .when('/positions/:career/:company', {
      templateUrl: '/angular/job_profile/jobprofile.html',
      controller: 'jobProfileController'
    })
    .when('/skillprofile', {
      templateUrl: '/angular/skill_profile/skillprofile.html'
    })
    .when('/companyprofile', {
      templateUrl: '/angular/company_profile/companyprofile.html'
    })
    .when('/login', {
      templateUrl: 'angular/login/login.html',
      controller: 'loginController'
    })
    .when('/loginSuccess', {
      templateUrl: '/partials/success.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

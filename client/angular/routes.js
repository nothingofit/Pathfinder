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
    .when('/choose', {
      templateUrl: '/angular/careers_list/careers_list.html'
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
    .when('/skillprofile', {
      templateUrl: '/angular/skill_profile/skillprofile.html'
    })
    .when('/companyprofile', {
      templateUrl: '/angular/company_profile/companyprofile.html'
    })
    .when('/addcareer', {
      templateUrl: '/angular/add_career/addcareer.html'
    })
    .when('/login', {
      templateUrl: 'angular/login/login.html',
      controller: 'loginController'
    })
    .when('/createcompany', {
      templateUrl: '/angular/create_company/createcompany.html'
    })
    .when('/loginSuccess', {
      templateUrl: '/partials/success.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

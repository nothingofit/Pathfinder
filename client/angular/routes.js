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
    .when('/skills/:skill', {
      templateUrl: '/angular/skill_profile/skillprofile.html',
      controller: 'skillProfileController'
    })
    .when('/companies/:company/add_career', {
      templateUrl: '/angular/add_career/addcareer.html',
      controller: 'addCareerController'
    })
    .when('/companies/:company/manage_listings', {
      templateUrl: '/angular/manage_listings/managelistings.html',
      controller: 'manageListingsController'
    })
    .when('/companies/:company', {
      templateUrl: '/angular/company_profile/companyprofile.html',
      controller: 'companyProfileController'
    })
    .when('/userprofile', {
      templateUrl: '/angular/user_profile/userprofile.html'
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

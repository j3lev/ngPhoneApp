'use strict';


angular
  .module('ngPhoneApp', ['ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.when('/Favorites', {
      templateUrl: 'views/Favorites.html',
      controller: 'MainCtrl'
    });
    $routeProvider.when('/UserDetails', {
      templateUrl: 'views/UserDetails.html',
      controller: 'UserCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/Favorites'});
  });
  

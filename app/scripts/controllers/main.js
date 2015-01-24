'use strict';

/**
 * @ngdoc function
 * @name ngPhoneAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngPhoneAppApp
 */
angular.module('ngPhoneApp')
  .controller('MainCtrl', function ($scope, userDataSvc, userSvc) {
  	document.body.style.paddingTop = '36px';
    userDataSvc.query(function(res) {
            $scope.users = res;
        }, function(err) {
            console.log(err);
        });

    $scope.userSelect = function(blah) {
    	userSvc.put(blah);
    }

  })
  
  .controller('UserCtrl', function ($scope, userSvc) {
  	document.body.style.paddingTop = "0px";
  	$scope.user = userSvc.get();
 

  });
 
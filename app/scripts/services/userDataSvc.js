'use strict';
angular.module('ngPhoneApp')
	.factory('userDataSvc', function($resource) {
	    return $resource("http://localhost:9000/resource/users.json"); 
	});
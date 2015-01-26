'use strict';

/**
 * @ngdoc function
 * @name ngPhoneAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngPhoneAppApp
 */
angular.module('ngPhoneApp')
    .controller('MainCtrl', function($scope, userDataSvc, userSvc) {

    	$scope.New = false;
    	$scope.Edit = false;

    	if (userSvc.isEdit()) {
    		userSvc.toggleEdit();
    		$scope.Edit = false;
    	}
    	if (userSvc.isNew()) {
    		userSvc.toggleNew();
    		$scope.New = false;
    	}



        document.body.style.paddingTop = '36px';

        if (!userSvc.checkLoaded()) {
            userDataSvc.query(function(res) {
                $scope.users = res;
                userSvc.load($scope.users);
                console.log("Loaded for the first time");
            }, function(err) {
                console.log(err);
            });
        } else {
            $scope.users = userSvc.getLoaded();
            console.log("Already Loaded");
        }

        $scope.userSelect = function(index, obj) {
            userSvc.put(index, obj);
        }

        $scope.setEdit = function() {
        	userSvc.toggleEdit();
        	console.log(userSvc.isEdit());
        }

        $scope.setNew = function() {
        	userSvc.toggleNew();
        }

    })

.controller('UserCtrl', function($scope, userSvc) {
    
    $scope.edit = userSvc.isEdit();
    
    document.body.style.paddingTop = "0px";
    
    $scope.user = userSvc.get();

    if ($scope.edit) {
    	$scope.userEdit = angular.copy($scope.user);
    	$scope.FullName = $scope.userEdit.FirstName + ' ' + $scope.userEdit.LastName;
    }

    $scope.submitEdit = function() {
    	$scope.userEdit.FirstName = $scope.FullName.split(" ")[0];
    	$scope.userEdit.LastName = $scope.FullName.split(" ")[1];
    	if (!userSvc.isNew()) userSvc.update($scope.userEdit);
    	else userSvc.create($scope.userEdit);
    }

    if (userSvc.isNew()) {
    	$scope.user.ProfilePic = 'url(../images/placeholder.png)';
    }

    $scope.del = function() {
    	if (userSvc.isNew()) return;
    	else userSvc.remove();
    }
});
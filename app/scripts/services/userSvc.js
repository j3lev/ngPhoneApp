'use strict';

angular.module('ngPhoneApp').service('userSvc', function() {

    var selectedUser = '';

    return {
        put: function(stuff) {
            selectedUser = stuff;
            return selectedUser;
        },
        get: function() {
            return selectedUser;
        }
    }

});
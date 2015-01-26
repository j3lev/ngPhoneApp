'use strict';

angular.module('ngPhoneApp').service('userSvc', function() {

    var selectedUser = '';
    var selectedIndex = -1;
    var loaded = false;
    var users = '';
    var isEdit = false;
    var isNew = false;

    return {
        put: function(index, stuff) {
            selectedUser = stuff;
            selectedIndex = index;
            return;
        },
        get: function() {
            return selectedUser;
        },
        getIndex: function() {
            return selectedIndex;
        },
        load: function(payload) {
            loaded = true;
            users = payload;
            return;
        },
        getLoaded: function() {
            return users;
        },
        checkLoaded: function() {
            if (loaded) return true;
            else return false;
        },
        isEdit: function() {
            if (isEdit) return true;
            else return false;
        },
        create: function(payload) {
            users.push(payload);
            isNew = false;
            return;
        },
        toggleEdit: function() {
            isEdit = !isEdit;
            return;
        },
        update: function(stuff) {
            users[selectedIndex] = stuff;
            return;
        },
        toggleNew: function() {
            isNew = !isNew;
            if (isNew) {
                isEdit = true;
                selectedUser = {
                    "FirstName": "New",
                    "LastName": "User",
                    "Mobile": "",
                    "Mobile2": "",
                    "Email": "",
                    "ProfilePic": "url(../images/placeholder.png)",
                    "Blurb": ""
                };
            }
            return;
        },
        isNew: function() {
            if (isNew) return true;
            else return false;
        },
        remove: function() {
        	users.splice(selectedIndex, 1);
        	return;
        }
    }

});
'use strict';

/* jasmine specs for UserListCtrl */

describe('myApp test', function() {

    beforeEach(module('myApp'));
    
    describe('UserListCtrl test', function() {
        var scope, userListCtrl, userService;

        beforeEach(module('myApp.service'));

        beforeEach(inject( function($rootScope, $controller, UserService, $q){
            scope = $rootScope.$new();
            
            userListCtrl = function() {
                return $controller('UserListCtrl', {
                    '$scope': scope,
                    'users': [],
                });
            };
            
            userService = UserService;
            spyOn(userService, "listUsers").and.callFake(function() {
                var deferred = $q.defer();
                deferred.resolve('Remote call result');
                return deferred.promise;
            });
        }));

        it('should do remote call on listUsers().', function() {
            userListCtrl();
            
            expect(userService.listUsers).toHaveBeenCalled();
            
        });
    
    });
    
});
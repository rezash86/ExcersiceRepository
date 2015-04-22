'use strict';

/* jasmine specs for UserListCtrl */

describe('myApp test', function() {

    beforeEach(module('myApp'));
    
    describe('UserListCtrl', function() {
        var scope, userListCtrl;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            userListCtrl = function() {
                return $controller('UserListCtrl', {
                    '$scope': scope,
                    'users': [],
                });
            };
        }));

        it('should setup mock users after listUsers() is called.', function() {
            
            userListCtrl();
            
            expect(scope.users.length).toBe(3);
            expect(scope.users[0].name).toBe('John Doe');
            expect(scope.users[0].email).toBe('john.doe@coderconference2015.com');
            expect(scope.users[0].group).toBe(false);
        });
    
    });
    
});
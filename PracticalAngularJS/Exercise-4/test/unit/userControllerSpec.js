'use strict';

/* jasmine specs for UserListCtrl */

describe('myApp test', function() {

    beforeEach(module('myApp'));
    beforeEach(module('myApp.service'));
    beforeEach(module('templates'));
    
    describe('UserListCtrl tests', function() {
        var scope, userListCtrl, userService;
        
        beforeEach(inject( function($rootScope, $controller, UserService, $q){
            scope = $rootScope.$new();
            
            userListCtrl = function() {
                return $controller('UserListCtrl', {
                    '$scope': scope,
                    'users': [],
                    'selectedUser': {}
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
    
        it('should assign a user object to $scope.selectedUser.', function() {
            
            var ctrl = userListCtrl();
            
            scope.selectUser({ id: 111, name : 'John Doe', email: 'john@corp.com', group: false});
            
            expect(scope.selectedUser.name).toBe('John Doe');
            
        });
        
        it('should reset $scope.selectedUser to null after $scope.unselectUser is called.', function() {
            
            var ctrl = userListCtrl();
            
            scope.selectUser({ id: 111, name : 'John Doe', email: 'john@corp.com', group: false});
            
            expect(scope.selectedUser.name).toBe('John Doe');
            
            scope.unselectUser();
            
            expect(scope.selectedUser).toBe(null);
        });
        
        it('should return true if pass the same user to $scope.isSelected().', function() {
            
            var ctrl = userListCtrl();
            
            scope.selectUser({ id: 111, name : 'John Doe', email: 'john@corp.com', group: false});
            
            var selected = scope.isSelected({id:111});
            
            expect(selected).toBe(true);
            
        });
    });
    
    describe('UserCtrl tests', function() {
        var scope, userCtrl, userService, userForm;

        beforeEach(inject( function($rootScope, $templateCache, $compile, $controller, UserService, $q){
            scope = $rootScope.$new();
            
            userCtrl = function() {
                return $controller('UserCtrl', {
                    '$scope': scope
                });
            };
            
            userService = UserService;
            spyOn(userService, "updateUser").and.callFake(function() {
                var deferred = $q.defer();
                deferred.resolve('Remote call result');
                return deferred.promise;
            });
            
            var templateHtml = $templateCache.get('unit/userFormTemplate.tpl.html');
            var formElem = angular.element("<div>" + templateHtml + "</div>");
            $compile(formElem)(scope);
            
            userForm = scope.userForm;
            scope.$apply();
        }));

        it('should do remote call on updateUser() when $scope.saveUser() is called.', function() {
            userCtrl();
            
            userForm.name.$setViewValue('John');
            userForm.email.$setViewValue('A@B.COM');
            
            scope.saveUser({id:111, name: 'John Doe'});
            
            expect(userService.updateUser).toHaveBeenCalled();           
        });
    
        it('should NOT call on updateUser() if required fields are empty when $scope.saveUser() is called.', function() {
            userCtrl();
            
            userForm.name.$setViewValue('John');
            //userForm.email.$setViewValue('A@B.COM');
            
            scope.saveUser({id:111, name: 'John Doe'});
            
            expect(userService.updateUser).not.toHaveBeenCalled();         
        });
    });
});
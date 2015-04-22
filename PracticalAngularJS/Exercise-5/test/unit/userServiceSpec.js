'use strict';

/* jasmine specs for UserService */

describe('myApp test', function() {

    beforeEach(module('myApp.service'));


    describe('UserService test', function() {
        var scope, httpBackend, userService, result, serviceUrl;

        beforeEach(inject(function(UserService, SERVICE_CONFIG, $httpBackend) {
            httpBackend = $httpBackend;
            userService = UserService
            serviceUrl = SERVICE_CONFIG.URL + '/service/user/list';

            var mockUsers = [{
                "name": "John Doe",
                "email": "john.doe@coderconference2015.com",
                "group": false
            }, {
                "name": "Jane Doe",
                "email": "jane.doe@coderconference2015.com",
                "group": false
            }, {
                "name": "CyberCon",
                "email": "CyberCon@coderconference2015.com",
                "group": true
            }]

            httpBackend.when("GET", serviceUrl).respond(mockUsers);
        }));

        it("should return mock users after invoking listUsers().", function() {
            userService.listUsers().then(function(data) {
                result = data;
            });
            httpBackend.expect('GET', serviceUrl);
            
            httpBackend.flush();
            
            expect(result.length).toEqual(3);
            expect(result[0].name).toBe('John Doe');
            expect(result[0].email).toBe('john.doe@coderconference2015.com');
            expect(result[0].group).toBe(false);
            
        });
    
    });

});
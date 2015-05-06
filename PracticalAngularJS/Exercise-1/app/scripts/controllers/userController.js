var myApp = angular.module('myApp', [ ]);

myApp.controller('UserListCtrl', function($scope) {
	
    $scope.users = [];
    
	$scope.listUsers = function() {
		var mockUsers = [{
                "id": "1",
                "name": "John Doe",
                "email": "john.doe@coderconference2015.com",
                "group": false
            }, {
                "id": "2",
                "name": "Jane Doe",
                "email": "jane.doe@coderconference2015.com",
                "group": false
            }, {
                "id": "3",
                "name": "CyberCon",
                "email": "CyberCon@coderconference2015.com",
                "group": true
            }, {
                "id": "4",
                "name": "John Smith",
                "email": "john.smith@coderconference2015.com",
                "group": false
            }, {
                "id": "5",
                "name": "TeamOne",
                "email": "team1@coderconference2015.com",
                "group": true
            }, {
                "id": "6",
                "name": "TeamTwo",
                "email": "team2@coderconference2015.com",
                "group": true
            }, {
                "id": "7",
                "name": "TeamThree",
                "email": "team3@coderconference2015.com",
                "group": true
            }]
        
        
		$scope.users = mockUsers;
	};
	
	$scope.listUsers();
	
});
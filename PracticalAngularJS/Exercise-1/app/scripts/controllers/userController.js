var myApp = angular.module('myApp', [ ]);

myApp.controller('UserListCtrl', function($scope) {
	
    $scope.users = [];
    
	$scope.listUsers = function() {
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
        
        
		$scope.users = mockUsers;
	};
	
	$scope.listUsers();
	
});
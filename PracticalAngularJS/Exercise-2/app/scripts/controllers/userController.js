var myApp = angular.module('myApp', [ 'myApp.service' ]);

myApp.controller('UserListCtrl', function($scope, UserService) {
	
    $scope.users = [];
    
	$scope.listUsers = function() {
		UserService.listUsers().then(function(data) {
			$scope.users = data;
		});
	};
	
	$scope.listUsers();
	
});
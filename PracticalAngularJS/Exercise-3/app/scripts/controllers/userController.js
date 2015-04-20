var myApp = angular.module('myApp', [ 'myApp.service' ]);

myApp.controller('UserListCtrl', function($scope, UserService) {
	
    $scope.users = [];
    $scope.selectedUser = null;
    
	$scope.listUsers = function() {
		UserService.listUsers().then(function(data) {
			$scope.users = data;
		});
	};
	
	$scope.listUsers();
	
    
    $scope.selectUser = function(user) {
		$scope.selectedUser = user;
	};

	$scope.unselectUser = function() {
		$scope.selectedUser = null;
	};
	
	$scope.isSelected = function(user) {
		return (user && $scope.selectedUser && $scope.selectedUser.id === user.id);
	};
    
});

myApp.controller('UserCtrl', function($scope, $log) {
	
    
        
});
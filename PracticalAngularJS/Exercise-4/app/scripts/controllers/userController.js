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

myApp.controller('UserCtrl', function($scope, $log, UserService) {
	
    $scope.saveUser = function ( user ) {
        
        if ($scope.userForm.$invalid) {
		    return;
		}
		var promise = UserService.updateUser( user );
		
        promise.then(function(response) { 
            var data = response.data;
            if (response.statusText == 'OK') {
                $scope.error = false;   
                $scope.message = 'User is saved.';
		    } else {
                $scope.error = true;   
		    	$scope.message = 'Error encountered.';
                $log.error(response.data);
		    }
		}, function(response) { 
            var data = response.data;
            $scope.error = true;                 
			if (data.httpStatus == 'BAD_REQUEST' || data.httpStatus == 'INTERNAL_SERVER_ERROR') {
                $scope.message = response.data.message;   
		    } else {
                $scope.message = 'Error encountered.';
		    }
            $log.error(response.data);
		});
	};
     
});
app.controller('configurationController', function($state, $scope, $http) {

	$http({
		method : 'GET',
		url : '/configuration/info/'
	}).then(function success(response) {
		$scope.spuConfig = response.data;
	}, function error(response) {
		$scope.spuConfig = response.statusText;
	});

	$scope.user = {
		operator_name : '',
		serial_number : ''
	};
 
	$scope.headingTitle = "User List";

	$scope.postOperatorAndSerial = function() {
		$http({
			method : 'POST',
			params :  $scope.user,
			url : '/configuration/info/',
		}).then(function success(response) {
			if (response.status == 200) {
				console.log('Redirect to loadsoftware');
				$state.go('loadsoftware',{}, { location: false });
			};
		}, function error(response) {
			console.log("Could not set an operator name and a serial number");
		});
	}
	
	

});
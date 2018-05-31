app.controller('loadSoftwareController', function($scope, $http, $timeout) {
	$scope.value = 1;

	

	// timer callback
	var i = 0;
	$scope.overallStatus = 0;
	var timer = function() {
		if ($scope.overallStatus != "100") {
			i++;
			$http({
				method : 'GET',
				url : '/loadsoftware/load/'
			}).then(function success(response) {
				$scope.asProgress = response.data.progressList[0].progress;
				$scope.osProgress = response.data.progressList[1].progress;
				$scope.overallStatus = response.data.overallStatus;
			}, function error(response) {
				$scope.spuConfig = response.statusText;
			});
			$timeout(timer, 1000);
		}
	}



	$scope.started = false;
	$scope.pressStart = function() {
		$http({
			method : 'POST',
			url : '/loadsoftware/load/'
		}).then(function success(response) {
			$scope.started = true;
			$timeout(timer, 1000);
		}, function error(response) {
			$scope.spuConfig = response.statusText;
		});
	}
});
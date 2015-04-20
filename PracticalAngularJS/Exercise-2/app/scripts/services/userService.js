'use strict';

angular.module('myApp.service', [])

.constant('SERVICE_CONFIG', {
	URL: 'http://cr-service.elasticbeanstalk.com'
})

.factory('UserService', function($http, SERVICE_CONFIG) {

	var service = {};
	
	service.listUsers = function() {
		var userServiceUrl = SERVICE_CONFIG.URL + "/service/user/list";
		var getConfig = {
		};
		return $http.get(userServiceUrl, getConfig).then(function(response) {
			return response.data;
		});
	};

	return service;		
});
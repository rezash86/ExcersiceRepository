var app = angular.module('app', ['ui.router', 'ngResource']);
app.config( function($stateProvider, $urlRouterProvider) {

		    $stateProvider
		        // route to show our basic form (/form)
		        .state('configuration', {
		            url: '/configuration',
		            templateUrl: '/js/configuration/configurationView.html',
		            controller: 'configurationController'
		        })
		        .state('loadsoftware', {      	
		        			url: '/loadsoftware',
		                    templateUrl: '/js/loadsoftware/loadSoftwareView.html',
		                    controller: 'loadSoftwareController'
		                })
		       ;
		    // catch all route
		    // send users to the form page 
		    $urlRouterProvider.otherwise('/');  

});


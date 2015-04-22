var myApp = angular.module('myApp', [ 'myApp.service', 'ui.grid', 'ui.grid.selection']);

myApp.controller('UserListCtrl', function($scope, UserService) {
	
    $scope.gridOptions = { 
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        showColumnFooter: true
      };

    $scope.gridOptions.columnDefs = [
        { name: 'name', displayName: 'Name'},
        { name: 'email', displayName: 'Email',
          footerCellTemplate: '<div class="ui-grid-bottom-panel" style="text-align: center">Total Rows : {{grid.appScope.gridOptions.data.length}}</div>'    
        },
        { name: 'group', displayName: 'Group' }
      ];

    $scope.gridOptions.multiSelect = true;

    /**
    $scope.gridOptions.data = [
      { name: 'Bob', email: 'CEO@corp.com', group: false},
      { name: 'Frank', email: 'Lowly.Developer@corp.com', group: false}
    ];
    **/
    
    $scope.listUsers = function() {
		UserService.listUsers().then(function(data) {
			$scope.gridOptions.data = data;
		});
	};
	
	$scope.listUsers();
	
});
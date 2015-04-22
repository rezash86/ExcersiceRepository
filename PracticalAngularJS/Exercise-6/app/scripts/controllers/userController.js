var myApp = angular.module('myApp', [ 'myApp.service', 'ui.grid', 'ui.grid.selection']);

myApp.controller('UserListCtrl', function($scope, UserService) {
	
    $scope.gridOptions = { 
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35
      };

    $scope.gridOptions.columnDefs = [
        { name: 'name', displayName: 'Name'},
        { name: 'email', displayName: 'Email'},
        { name: 'group', displayName: 'Group' }
      ];

    $scope.gridOptions.multiSelect = true;

    $scope.gridOptions.data = [
      { name: 'Bob', email: 'CEO@corp.com', group: false},
      { name: 'Frank', email: 'Lowly.Developer@corp.com', group: false}
    ];
    
    //$scope.gridOptions = {
        //rowHeight:70,
        //enableRowSelection: true, 
        //enableRowHeaderSelection: true,
        //selectionRowHeaderWidth: 35,
        //enableSelectAll: true,
        //multiSelect: false,
        //noUnselect: false,
        //showColumnFooter: true,
        //enableSorting: true,
        //enableCellEditOnFocus: true,
        //columnDefs: [
        //    { name: ' ' },
         //   { field: 'name' }, 
         //   { field: 'email' }, 
         //   { field: 'group' }],
     //   data: 
        //onRegisterApi: function(gridApi) {
        //  $scope.gridApi = gridApi;
        //}
    //};
    
    $scope.listUsers = function() {
		UserService.listUsers().then(function(data) {
			$scope.gridOptions.data = data;
		});
	};
	
	$scope.listUsers();
	
});
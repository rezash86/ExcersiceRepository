'use strict';

angular.module('myApp.directive', [])

.directive('userPagination', function() {
  return {
    restrict: 'E',
    scope: {
      rowsPerPage: '=',
      totalRows:  '=',
      currentPage: '=',
      onSelectPage: '&'
    },
    template:
      '<div><ul class="pagination">' +
        '<li ng-class="{disabled: !prevAvailable()}"><a ng-click="gotoPrevious()">Prev</a></li>' +
        '<li ng-repeat="page in pages" ng-class="{active: isCurrent(page)}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
        '<li ng-class="{disabled: !nextAvailable()}"><a ng-click="gotoNext()">Next</a></li>' +
        '</ul>' +
      '</div>',
    replace: true,
    link: function(scope) {
      
      scope.$watch('totalRows', function(value) {
        scope.pages = [];
        scope.pageCount = Math.floor(value/scope.rowsPerPage) + 1;  
        for(var i=1;i<=scope.pageCount;i++) {
          scope.pages.push(i);
        }
        if ( scope.currentPage <= scope.pageCount ) {
          scope.selectPage(scope.currentPage);
        }
      });
        
      scope.prevAvailable = function() {
        return scope.currentPage > 1;
      };
        
      scope.nextAvailable = function() {
        return scope.currentPage < scope.pageCount;
      };
        
      scope.selectPage = function(page) {
        scope.currentPage = page;
        scope.onSelectPage({"currentPage": scope.currentPage, 
                              "rowsPerPage": scope.rowsPerPage});
      };

      scope.gotoPrevious = function() {
        if ( scope.prevAvailable() ) {
          scope.selectPage(scope.currentPage-1);
        }
      };
        
      scope.gotoNext = function() {
        if ( scope.nextAvailable() ) {
          scope.selectPage(scope.currentPage+1);
        }
      };
    }
  };
});
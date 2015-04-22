'use strict';

/* jasmine specs for userPagination */

describe('userPagination directive test', function () {
     var $scope, element, list;
     
     beforeEach(module('myApp.directive'));
    
     beforeEach(inject(function($compile, $rootScope) {
            $scope = $rootScope;
            $scope.totalRows = 106;
            $scope.currentPage = 3;
            $scope.rowsPerPage = 10;
         
            element = $compile('<user-pagination rows-per-page="rowsPerPage" current-page="currentPage" total-rows="totalRows" on-select-page="onPageSelected(currentPage, rowsPerPage)"></user-pagination>')($scope);
            $scope.$digest();
            list = function() { return element.find('li'); };
        }));
    
        it('has the correct number of the pages given 10 rows per page', function() {
            var pageCount = Math.floor($scope.totalRows/$scope.rowsPerPage) + 1;  
            for(var i=1; i<=pageCount;i++) {
                expect(list().eq(i).text()).toEqual(''+i);
            } 
        });
     
        it('sets the currentPage to be active', function() {
               var currentPageItem = list().eq($scope.currentPage);
               expect(currentPageItem.hasClass('active')).toBe(true);
        });
    
        it('has "next" disabled if is already the last page', function() {
            var pageCount = Math.floor($scope.totalRows/$scope.rowsPerPage) + 1;  
            $scope.currentPage = pageCount;
            $scope.$digest();
            var nextPageItem = list().eq(-1);
            expect(nextPageItem.hasClass('disabled')).toBe(true);
        });
    
        it('changes currentPage if a page link is clicked', function() {
            var page4link = list().eq(4).find('a').eq(0);
            page4link.click();
            $scope.$digest();

            expect($scope.currentPage).toBe(4);
        });
});

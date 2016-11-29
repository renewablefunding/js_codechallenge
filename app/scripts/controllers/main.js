'use strict';

/**
 * @ngdoc function
 * @name sunriseAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sunriseAppApp
 */
angular.module('sunriseAppApp')
  .controller('MainCtrl', function ($scope, sunriseData, localStorageService, $rootScope, $modal) {
    

    $scope.date = {startDate: null, endDate: null};

    $scope.address = {};

    $scope.tzList = ['America/Los_Angeles', 'America/New_York', 'Asia/Tokyo', 'Australia/Sydney', 'America/Phoenix']
    $scope.selectedTz = sunriseData.tz;
     $scope.gridOptions1 = {
     	columnDefs: [
     		{name: 'sunrise' , enableCellEdit: true},
     		{name: 'sunset'},
     		{name: 'date'}
     	],
    enableSorting: true,
    enableColumnResizing: true
  };
  $scope.gridOptions1.multiSelect = false;
    $scope.gridOptions1.enableRowSelection = true;
  $scope.gridOptions1.modifierKeysToMultiSelect = false;
  $scope.gridOptions1.noUnselect = true;
   // $scope.gridOptions1.onRegisterApi = function(gridApi){
   //    //set gridApi on scope
   //    $scope.gridApi = gridApi;
   //    gridApi.selection.on.rowSelectionChanged($scope,function(row){
   //      var msg = 'row selected ' + row.isSelected;
   //      $log.log(msg);
   //    });
 
   //    gridApi.selection.on.rowSelectionChangedBatch($scope,function(rows){
   //      var msg = 'rows changed ' + rows.length;
   //      $log.log(msg);
   //    });
   //  };
   //  
    	$scope.gridOptions1.onRegisterApi = function( gridApi ) {
    	$scope.gridApi = gridApi;
    	gridApi.selection.on.rowSelectionChanged($scope,function(row){
       		var modalInstance = $modal.open({
       			templateUrl: '/views/details.html',
       			controller: 'DetailsCtrl',
       			resolve: {
       				rowObj: function(){
       					return row.entity;
       				}
       			}
       		})
      	});
  	};

  $scope.convertTz = function(time, date){



  }

  $scope.setTz = function(tz){
  	sunriseData.tz.dat = tz;
  }
    $scope.getData = function(){
    	if($scope.date.startDate && $scope.address.geometry){
    		sunriseData.passDates($scope.date.startDate, $scope.date.endDate, $scope.address.geometry.location.lat(), $scope.address.geometry.location.lng())
    	}
    }

    $rootScope.$on('newData', function(){
    	$scope.gridOptions1.data = localStorageService.get('array');
    })

  });

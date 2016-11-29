'use strict';

/**
 * @ngdoc function
 * @name sunriseAppApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the sunriseAppApp
 */
angular.module('sunriseAppApp')
  .controller('DetailsCtrl', function ($scope, $modalInstance, rowObj) {
    $scope.row = rowObj;

    $scope.parseDate = function(date, time){
    	var date = new Date(date + ' ' + time + ' ' + 'UTC');
  	
  	return date.toLocaleTimeString();
    }

    $scope.dateDiff = function(date1, time1, date2, time2){
    	var dateObj1 = new Date(date1 + ' ' + time1 + ' ' + 'UTC');
    	var dateObj2 = new Date(date2 + ' ' + time2 + ' ' + 'UTC');

    	if (dateObj2 < dateObj1) {
    dateObj2.setDate(dateObj2.getDate() + 1);
}

var diff = dateObj2 - dateObj1;

// 28800000 milliseconds (8 hours)
	return Math.floor(diff / 1000 / 60 / 60)
    }

    $scope.close = function(){
    	$modalInstance.close()
    }
  });

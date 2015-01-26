'use strict';

/**
 * @ngdoc service
 * @name sunriseAppApp.sunriseData
 * @description
 * # sunriseData
 * Service in the sunriseAppApp.
 */
angular.module('sunriseAppApp')
  .service('sunriseData', function ($http, $q, $interval, $rootScope, localStorageService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var sunrise = this;
    sunrise.array = [];

    sunrise.tz = {dat: 'America/Los_Angeles'}
    sunrise.convertTz = function(date, time){
    	// <!-- moment.tz("2014-06-01 12:00", "America/New_York"); -->
    	// var splitDate = date.split('/');
    	// var splitTime = time.split(':');
    	// var amPm = splitTime[1].split(' ');
    	// // amPm.splice(1);
    	// splitTime[1] = amPm[0];
    	var date = new Date(date + ' ' + time + ' ' + 'UTC');
  	// var poop = Date.UTC(splitDate[2], splitDate[0] - 1, splitDate[1] - 1, splitTime[0], splitTime[1], 0);
  	return date.toLocaleTimeString();
    }

    sunrise.apiCall = function(lat, long, date){
    	var defer = $q.defer()

    	

    	if(lat && long && date){
    		$http.get($rootScope.sunAPI + 'lat=' + lat + '&lng=' + long + '&date=' + date.toLocaleDateString(), {headers: {
                    'Content-Type': 'application/json; charset=utf-8'
        }})
    		.success(function(res){
    			res.results.sunrise = sunrise.convertTz( date.toLocaleDateString(),res.results.sunrise)
    			res.results.sunset = sunrise.convertTz( date.toLocaleDateString(),res.results.sunset)
    			res.results.solar_noon = sunrise.convertTz( date.toLocaleDateString(),res.results.solar_noon)
    			res.results.date = date.toLocaleDateString();

    			angular.forEach($('.ui-grid-row'), function(row, $index){
    				row.click(function(){
    					debugger;
    				})
    			})
    			sunrise.array.push(res.results )  ;
    			localStorageService.set('array', sunrise.array);
    			defer.resolve(res);
    		})
    		.error(function(status, error){
    			defer.reject(error);
    		})
    	}
    	else{
    		defer.reject({message: 'Please enter proper address'})
    	}

    	return defer.promise;
    }

    sunrise.passDates = function(date1, date2, lat, long){
    	var diff = sunrise.diffDates(date1, date2);

    	localStorageService.set('array', null)
    	sunrise.array = [];

    	for (var i = 0; i <= diff; i++) {
    		var tomorrow = new Date(date1);
		tomorrow.setDate(tomorrow.getDate() + i);
		sunrise.apiCall(lat, long, tomorrow)
		.then(function(){
			$rootScope.$broadcast('newData');
		});

    	};
    }

    sunrise.getData = function(lat, long, date){

    }


    sunrise.diffDates = function(date1, date2){
    	var a = new Date(date1); // Now
	var b = new Date(date2); // 2010
	var d = (b - a); // difference in milliseconds

	var seconds = Math.round(d/1000);

	return seconds / (60*60*24);
    }


    return sunrise;
  });

'use strict';

/**
 * @ngdoc overview
 * @name sunriseAppApp
 * @description
 * # sunriseAppApp
 *
 * Main module of the application.
 */
angular
  .module('sunriseAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'daterangepicker',
    'google.places',
    'LocalStorageModule',
    'ui.grid',
    'ui.grid.selection',
    'ui.bootstrap'  ])
  .config(function ($routeProvider, localStorageServiceProvider, $httpProvider) {
    //  $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['Access-Control-Allow-Origin: *'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      localStorageServiceProvider
    .setStorageCookie(45);
  })
  .run(function($rootScope){
    // http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
    $rootScope.sunAPI = '//api.sunrise-sunset.org/json?'
  });

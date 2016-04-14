'use strict';

/**
 * @ngdoc overview
 * @name translateMeApp
 * @description
 * # translateMeApp
 *
 * Main module of the application.
 */
angular
  .module('translateMeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
        .when('/webhook', {
        templateUrl: 'views/webhook.php'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

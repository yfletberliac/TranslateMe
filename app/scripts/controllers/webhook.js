'use strict';

/**
 * @ngdoc function
 * @name translateMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the translateMeApp
 */
angular.module('translateMeApp')
  .controller('WebhookCtrl', function ($http) {
    $http.get('/webhook/', function (req, res) {
	  if (req.query['hub.verify_token'] === '<validation_token>') {
	    res.send(req.query['hub.challenge']);
	  }
	  res.send('Error, wrong validation token');
	})
  });

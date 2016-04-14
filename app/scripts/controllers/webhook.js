'use strict';

/**
 * @ngdoc function
 * @name translateMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the translateMeApp
 */
angular.module('translateMeApp')
  .controller('WebhookCtrl', function (req, res) {
	if (req.query['hub.verify_token'] === 'EAADzIHgmTZBgBAGyD8bsOshnRF4yVmeho4LlqkE1dLCOAD4z8wUCN01Bzst6WKyTGAcMOJXLkRGRwv3N9CItdwe5VA8DtONmqaXKIkBuG8d4ZAuqU47KbRa7BjU6uXD6JXBd3aeWJHZBxQkjldfe9w7fO8jkz3ZAQYwTeBCqgwZDZD') {
	  res.send(req.query['hub.challenge']);
	}
	res.send('Error, wrong validation token');
  });

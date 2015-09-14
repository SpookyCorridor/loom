var loomApp = angular.module('loomApp', ['ngRoute']);

loomApp.config(function($routeProvider) {
	$routeProvider
	.when('/editor', {
		controller: 'EditorController',
		templateUrl: '../../app_server/views/register.jade'
	});

});
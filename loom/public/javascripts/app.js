var loomApp = angular.module('loomApp', ['ngRoute']);

loomApp.config(function($routeProvider) {
	$routeProvider
	.when('/test', {
		controller: 'EditorController',
		templateUrl: '../../app_server/views/index.jade'
	});

});
var loomApp = angular.module('loomApp', ['ngRoute']);

loomApp.config(function($routeProvider) {
	$routeProvider
	.when('/editor', {
		controller: 'EditorController',
		templateUrl: 'partials/editor'
	})
	.when('/editor/settings', {
		controller: 'EditorController',
		templateUrl: 'partials/modal'
	});

});
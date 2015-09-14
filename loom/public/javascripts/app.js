var loomApp = angular.module('loomApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/editorz', {
		controller: 'EditorController',
		templateUrl '../../app_server/views/editor.jade'
	});

});
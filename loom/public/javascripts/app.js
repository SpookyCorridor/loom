var loomApp = angular.module('loomApp', ['ngRoute'])
	.factory('aceFactory', ['$http', function($http) {
		var baseUrl = 'api/v1/ace/'
		var aceFactory = {};

		aceFactory.getModes = function() {
			return $http({
				method: 'GET',
				url: baseUrl + "modes",
				cache: true
			}); 
		};

		aceFactory.getThemes = function() {
			return $http({
				method: 'GET',
				url: baseUrl + "themes",
				cache: true
			}); 
		}

		return aceFactory; 
	}])




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
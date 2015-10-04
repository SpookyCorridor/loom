var loomApp = angular.module('loomApp', ['ngRoute', 'gallery-main'])
	.factory('aceFactory', ['$http', function($http) {
		var baseUrl = 'api/v1/ace/',
				threadBaseUrl = 'api/v1/gallery',
				aceFactory = {};

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

		aceFactory.createThread = function() {
			return $http({
				method: 'PUT',
				url: threadBaseUrl,
				cache: false 
			});
		}

		return aceFactory; 
	}])

// loomApp.config(function($routeProvider) {
// 	$routeProvider
// 	.when('/editor', {
// 		controller: 'EditorController',
// 		templateUrl: 'partials/editor'
// 	})
// 	.when('/editor/settings', {
// 		controller: 'EditorController',
// 		templateUrl: 'partials/modal'
// 	});

// });
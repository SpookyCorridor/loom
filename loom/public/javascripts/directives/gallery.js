(function() {
	var app = angular.module('gallery-main', [ ]);
	app.directive('galleryList', function() {
		return {
			restrict: 'E', 
			templateUrl: "partials/gallery-list"
		};
	}); 
})();
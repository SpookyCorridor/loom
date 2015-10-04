loomApp.controller('GalleryController', ['$scope', '$http', function($scope, $http) {
	loadGallery(); 

	$scope.gallery = {};

	function loadGallery() {
		$http.get('/api/v1/gallery').success(function(data) {
			$scope.gallery = data;
		});
	}

}]); 
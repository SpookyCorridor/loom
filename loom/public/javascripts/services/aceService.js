loomApp.factory('ace', function($http){
	return {
		themes: function(callback) {
			$http({
				method: 'GET',
				url: 'localhost:3000/api/v1/themes',
				cache: true
			}).success(callback);
		}, 
		modes: function(callback) {
			$http({
				method: 'GET',
				url: 'localhost:3000/api/v1/modes',
				cache: true 
			}).success(callback); 
		}
	};
}); 
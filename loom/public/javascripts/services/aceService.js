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
		},
		getTheme: function(id, callback) {
			$http({
				method: 'GET',
				url: 'localhost:3000/api/v1/themes/' + id,
				cache: true 
			}).success(callback);
		},
		getModes: function(id, callback) {
			$http({
				method: 'GET',
				url: 'localhost:3000/api/v1/modes/' + id,
				cache: true
			}).success(callback);
		}
	};
}); 
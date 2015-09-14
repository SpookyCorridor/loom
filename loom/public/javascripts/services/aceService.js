loomApp.factory('ace', function($http){
	return {
		themes: function(callback) {
			$http({
				method: 'GET',
				url: 'localhost:3000/api/v1/ace/themes',
				cache: true
			}).success(callback);
		}, 
		modes: function(callback) {
			$http({
				method: 'GET',
				url: 'localhost:3000/api/v1/ace/modes',
				cache: true 
			}).success(callback); 
		},
		getTheme: function(id, callback) {
			$http({
				method: 'GET',
				url: 'localhost:3000/api/v1/ace/themes/' + id,
				cache: true 
			}).success(callback);
		},
		getModes: function(id, callback) {
			$http({
				method: 'GET',
				url: 'localhost:3000/api/v1/ace/modes/' + id,
				cache: true
			}).success(callback);
		}
	};
}); 
loomApp.controller('EditorController', ['$scope', 'ace', function($scope, ace) {
	ace.themes(function(data) {
		$scope.themes = data;
		console.log('loaded' + data); 
	});
	ace.modes(function(data) {
		$scope.modes = data; 
		console.log('loaded' + data);
	})
}])
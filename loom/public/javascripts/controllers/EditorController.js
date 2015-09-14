loomApp.controller('EditorController', ['$scope', 'ace', function($scope, ace) {
	ace.themes(function(data) {
		$scope.themes = data;
	});
	ace.modes(function(data) {
		$scope.modes = data; 
	})
}])
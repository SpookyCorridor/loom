loomApp.controller('EditorController', ['$scope', 'ace', '$document',function($scope, ace, $document) {
	ace.themes(function(data) {
		$scope.themes = data;
		console.log('loaded' + data); 
	});
	ace.modes(function(data) {
		$scope.modes = data; 
		console.log('loaded' + data);
	})
}])
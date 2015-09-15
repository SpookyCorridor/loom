loomApp.controller('EditorController', ['$scope', 'aceFactory', '$document',function($scope, aceFactory, $document) {
	findThemes(); 
	findModes(); 

	function findThemes() {
		aceFactory.getThemes()
			.success(function(themes) {
				console.log(themes); 
				$scope.themes = themes; 
			})
			.error(function(err) {
				console.log(err); 
			});
	}

	function findModes() {
		aceFactory.getModes()
			.success(function(modes) {
				$scope.modes = modes; 
			})
			.error(function(err) {
				console.log(err); 
			});
	}

	$scope.currentTheme = 'monokai'; 
	$scope.currentMode = 'javascript'; 

	$scope.setTheme = function() {
		console.log($scope.currentTheme); 
		window.editor.setTheme("ace/theme/" + $scope.currentTheme.name);
	}



}])
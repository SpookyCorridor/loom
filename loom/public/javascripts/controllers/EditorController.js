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
	$scope.softTabs = false; 
	$scope.gutter = false; 
	$scope.tabb = 'tab size';  
	$scope.tabSize = 4; 
	$document.tabb = 'wtf'; 

	$scope.setTheme = function() {
		//console.log($scope.currentTheme); 
		app.editor.setTheme("ace/theme/" + $scope.currentTheme.name);
	}

	$scope.setMode = function() {
		//console.log($scope.currentMode); 
		app.editor.getSession().setMode("ace/mode/" + $scope.currentMode.name);
	}


	$scope.setSoftTabs = function() {
		if ($scope.softTabs) {
			app.editor.getSession().setUseSoftTabs(true);
		} else {
			app.editor.getSession().setUseSoftTabs(false);
		}
	} 

	$scope.setGutter = function() {
		if ($scope.gutter) {
			app.editor.renderer.setShowGutter(true);
		} else {
			app.editor.renderer.setShowGutter(false);
		}
	}

	
	$scope.increaseFont = function() {
		$scope.fontSize += 2; 
		document.getElementById('editor').style.fontSize= $scope.fontSize + '';
	}

	$scope.decreaseFont = function() {
		$scope.fontSize -= 2; 
		document.getElementById('editor').style.fontSize= $scope.fontSize + '';
	}

	$scope.setTabSize = function() {
		console.log('changing tab size'); 
		app.editor.getSession().setTabSize($scope.tabSize);
	}


}])
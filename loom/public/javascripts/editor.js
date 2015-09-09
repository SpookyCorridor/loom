console.log('loaded');
$(document).ready(function(){
	window.editor = ace.edit("editor");
	window.editor.setTheme("ace/theme/monokai");
  window.editor.getSession().setMode("ace/mode/javascript");
}); 

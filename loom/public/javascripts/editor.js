Anchor = require('ace/anchor').Anchor 
// var editorApp = angular.module("editorApp", []); 

// editorApp.controller("editorCtrl", function($scope){

// });   

console.log('loaded');  
$(document).ready(function(){
	window.editor = ace.edit("editor");
	window.aceDocument = window.editor.session.getDocument(); 
	window.aceSession = ace.createEditSession(window.aceDocument); 
	window.editor.setTheme("ace/theme/tomorrow");
  window.editor.getSession().setMode("ace/mode/javascript");
  window.editor.cursors = function(){
  	new window.editor.selection.anchor(window.editor, 2,2); 
  }

var socket = io.connect('http://localhost:3000');

var users = {}; 
window.state = {};  
window.updated = {};

socket.on('update', function (data) {
  console.log('update change client: ' + data);
  console.log('update client state: ' + window.state);
  if (window.state !== data) {
    console.log('should update'); 
    window.editor.getSession().setValue(data);
  }
});

socket.on('new', function(user) {
  console.log(user); 
});

window.editor.getSession().on('change', function(){ 
  function setChange() {
    window.state = window.editor.getSession().getValue(); 
    socket.emit('change', window.state); 
  }
  window.setTimeout(setChange, 200);
  
}); 

// on change add to a empty array and push that to the socket servr 






  //http://stackoverflow.com/questions/24807066/multiple-cursors-in-ace-editor
//   var marker = {}
// marker.cursors = [{row: 0, column: 10}]
// marker.update = function(html, markerLayer, session, config) {
//     var start = config.firstRow, end = config.lastRow;
//     var cursors = this.cursors
//     for (var i = 0; i < cursors.length; i++) {
//         var pos = this.cursors[i];
//         if (pos.row < start) {
//             continue
//         } else if (pos.row > end) {
//             break
//         } else {
//             // compute cursor position on screen
//             // this code is based on ace/layer/marker.js
//             var screenPos = session.documentToScreenPosition(pos)

//             var height = config.lineHeight;
//             var width = config.characterWidth;
//             var top = markerLayer.$getTop(screenPos.row, config);
//             var left = markerLayer.$padding + screenPos.column * width;
//             // can add any html here
//             html.push(
//                 "<div class='MyCursorClass' style='",
//                 "height:", height, "px;",
//                 "top:", top, "px;",
//                 "left:", left, "px; width:", width, "px'></div>"
//             );
//         }
//     }
// }
// marker.redraw = function() {
//    this.session._signal("changeFrontMarker");
// }
// marker.addCursor = function() {
//     // add to this cursors
    
//     // trigger redraw
//     marker.redraw()
// }
// marker.session = window.aceSession;
// marker.session.addDynamicMarker(marker, true);
// marker.addCursor(); 
// call marker.session.removeMarker(marker.id) to remove it
// call marker.redraw after changing one of cursors
  // 
//console.log(marker.session.addDynamicMarker(marker, true));
	//window.aceSession.addDynamicMarker(window.marker, true); 
}); 

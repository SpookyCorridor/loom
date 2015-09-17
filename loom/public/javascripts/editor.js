Anchor = require('ace/anchor').Anchor 
// var editorApp = angular.module("editorApp", []); 

// editorApp.controller("editorCtrl", function($scope){

// });   

var app = app || {};

console.log('loaded');  
$(document).ready(function(){
	app.editor = ace.edit("editor");
	app.aceDocument = app.editor.session.getDocument(); 
	app.aceSession = ace.createEditSession(app.aceDocument); 
	app.editor.setTheme("ace/theme/tomorrow");
  app.editor.getSession().setMode("ace/mode/javascript");
  app.editor.cursors = function(){
  	new app.editor.selection.anchor(app.editor, 2,2); 
  }

var socket = io.connect('http://localhost:3000');

var users = {};  
app.updated = {};
app.state = []; 
app.limit = 1; 

socket.on('update', function (data) {
  //console.log('update change client: ' + data);
  //console.log('update client state: ' + app.state);
  //console.log('this is the ' + data.state); 
  console.log('the change is' + JSON.stringify(data.change));
  //console.log('wtf ' + app.state); 
  
  if (data.state !== app.state) {
    console.log('update ' + app.limit)
    app.aceDocument.applyDeltas(data.change);
    app.limit = 1; 
  }
});

socket.on('new', function(user) {
  console.log(user); 
});

app.editor.getSession().on('change', function(e){ 
    // app.limit += e.length; 
     if (app.limit = 1) {
      app.state = app.editor.getSession().getValue();  
      console.log('cur app state is' + app.state); 
      socket.emit('change', {change: [e], state: app.state }); 
      app.limit = 0;
    }
    //} 
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
// marker.session = app.aceSession;
// marker.session.addDynamicMarker(marker, true);
// marker.addCursor(); 
// call marker.session.removeMarker(marker.id) to remove it
// call marker.redraw after changing one of cursors
  // 
//console.log(marker.session.addDynamicMarker(marker, true));
	//app.aceSession.addDynamicMarker(app.marker, true); 
}); 

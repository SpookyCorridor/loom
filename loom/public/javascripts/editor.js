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
app.changes = []; 

socket.on('update', function (data) {
  //console.log('update change client: ' + data);
  //console.log('update client state: ' + app.state);
  //console.log('this is the ' + data.state); 
  //console.log('the change is' + JSON.stringify(data.change));
  //console.log('wtf ' + app.state); 
  //app.test = data.change; 
  
    console.log('update track ****');
    console.log(app.editor.getValue());
    console.log(data.state); 
    if (data.state !== app.editor.getValue()) {
    app.aceDocument.applyDeltas(data.change);
    app.history = data.change; 
    console.log(app.history);
    console.log(data.change); 
    app.changes = []; 
  }
});

socket.on('new', function(user) {
  console.log(user); 
});

app.aceSession.on('change', function(e){   
      app.changes.push(e); 
      if (app.changes.length > 2) { 
        console.log('**********onchange');
        console.log(app.changes);
        console.log(app.history);
        app.state = app.editor.getValue(); 
        //console.log(JSON.stringify(app.changes) == JSON.stringify(app.history));
        if (JSON.stringify(app.changes) !== JSON.stringify(app.history)) {
          socket.emit('change', {change: app.changes, state: app.state });
          app.history = app.changes; 
          app.changes = []; 
        } 
     } 
    //} 
}); 

//push delta to array and send on x length 
// cache socket data 






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

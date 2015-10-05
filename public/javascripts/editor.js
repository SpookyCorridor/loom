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

  var socket = io.connect('theloom.azurewebsites.net:80');

  var users = {};  
  app.updated = {};
  app.state = []; 
  app.changes = [];
  app.block = {};  

  socket.on('setCanvas', function(data) {
    app.editor.setValue(data); 
  })

  socket.on('update', function (data) {  
    if (app.editor.getValue() !== data.state) {
      app.block = data.state; 
      app.aceDocument.applyDeltas(data.change); 
    } 
  });

  socket.on('new', function(user) {
    console.log(user); 
  });

  app.aceSession.on('change', function(e){   
    app.state = app.editor.getValue(); 
    if (app.state !== app.block) {
      socket.emit('change', {state: app.state, change: [e]}); 
  }

  }); 

}); 

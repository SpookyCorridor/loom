var mongoose = require('mongoose'); 

var connectionString = 'mongodb://localhost/loom'; 

mongoose.connect(connectionString); 

mongoose.connection.on('connected', function() {
	console.log('mongoose connected to ' + connectionString); 
}); 
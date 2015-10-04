var mongoose = require('mongoose'); 

var AceThemeSchema = new mongoose.Schema({
	name: String   
});

module.exports = mongoose.model('Ace', AceThemeSchema); 

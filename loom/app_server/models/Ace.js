var mongoose = require('mongoose'); 

var AceSchema = new mongoose.Schema({
	themes: [],
	modes: [], 
	other: [
	{
		workers: [],
		keybindings: [],
		extensions: []
	}
	]
});

module.exports = mongoose.model('Ace', AceSchema); 
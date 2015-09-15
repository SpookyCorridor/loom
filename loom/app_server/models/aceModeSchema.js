var mongoose = require('mongoose'); 

var AceModeSchema = new mongoose.Schema({
	name: String   
});

module.exports = mongoose.model('Ace', AceModeSchema); 

// mongoimport --db Ace --collection AceModeSchema --type json --file modeSeeds.json`
// mongoimport --db Ace --collection AceThemeSchema --type json --file modeSeeds.json`
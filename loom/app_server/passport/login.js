var LocalStrategy = require('passport-local').Strategy 
var User = require('../models/userSchema');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('login', new LocalStrategy({
		passReqToCallback : true
	},
	function(req, username, password, done) {
		//does user already exist
		User.findOne({ 'username' : username},
			function(err, user) {
				if (err)
					return done(err);
				// username does not exist
				if (!user) {
					console.log('User not found: ' + username);
					return done(null, false, req.flash('message', 'User not found.'));
				}
			// user exists but wrong password
			if (!isValidPassword(user, password)){
				console.log('Invalid password');
				return done(null, false, req.flash('message', 'Invalid password'));
			}
			// User and password match
			return done(null, user);
			});
		})
	);

	var isValidPassword = function(user, passsword){
		return bCrypt.compareSync(password, user.password);
	}

}
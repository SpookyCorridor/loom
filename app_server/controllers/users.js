var passport = require('passport'); 

module.exports.login = function(req,res,next){
	res.render('login', { message: req.flash('message')});
}; 

module.exports.loginPost = passport.authenticate('login', {
	successRedirect: '/gallery',
	failureRedirect: '/login',
	failureFlash: true 
}); 

module.exports.signup = function(req,res,next){
	res.render('register', {message: req.flash('message')}); 
};

module.exports.signupPost = passport.authenticate('signup', {
	successRedirect: '/gallery',
	failureRedirect: '/signup',
	failureFlash: true 
}); 

module.exports.logout = function(req,res) {
	req.logout();
	res.redirect('/login'); 
}; 


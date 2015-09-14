var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); 
var ctrlApi = require('../controllers/api');
var ctrlUser = require('../controllers/users'); 

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/login');
}

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', ctrlMain.index); 
router.get('/gallery', isAuthenticated, ctrlMain.gallery);
//TODO: change to accept an id after testing 
router.get('/editor', ctrlMain.editor);


//========api=========== 
router.get('/api/v1/gallery', ctrlApi.gallery);
router.post('/api/v1/gallery', ctrlApi.createThread);
router.get('/api/v1/gallery/:id', ctrlApi.getThread); 
router.put('/api/v1/gallery/:id', ctrlApi.updateThread);
router.patch('/api/v1/gallery/:id', ctrlApi.updateThread);
router.delete('/api/v1/gallery/:id', ctrlApi.deleteThread); 
module.exports = router;

//login 
router.get('/login', ctrlUser.login); 
router.post('/login', ctrlUser.loginPost);

//signup
router.get('/signup', ctrlUser.signup);
router.post('/signup', ctrlUser.signupPost); 
router.get('/logout', ctrlUser.logout);

//editor
router.get('/api/v1/ace/themes', ctrlApi.themes);
router.get('/api/v1/ace/modes', ctrlApi.modes); 





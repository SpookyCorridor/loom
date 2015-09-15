/* GET home page */


module.exports.index = function(req, res){
	res.render('index');
};

module.exports.gallery = function(req,res){
	res.render('gallery', { user: req.user, title: 'Gallery'}); 
}; 

module.exports.editor = function(req,res){
	res.render('partials/editor');
}; 
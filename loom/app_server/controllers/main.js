/* GET home page */


module.exports.index = function(req, res){
	console.log(themes);
	console.log('test');
	res.render('index', { title: 'Express'});
};

module.exports.gallery = function(req,res){
	res.render('gallery', { user: req.user, title: 'Gallery'}); 
}; 

module.exports.editor = function(req,res){
	res.render('editor', {title: 'Editor'});
}; 
/* GET home page */
module.exports.index = function(req, res){
	res.render('index', { title: 'Express'}); 
};

module.exports.gallery = function(req,res){
	res.render('gallery', {title: 'Gallery'}); 
}; 

module.exports.editor = function(req,res){
	res.render('editor', {title: 'Editor'});
}; 
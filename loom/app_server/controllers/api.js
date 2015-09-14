var threadModel = require('../models/threadSchema');
var bodyParser = require('body-parser'); 
var aceModel = require('../models/aceSchema'); 

module.exports.gallery = function(req,res,next) {
	threadModel.find(function(err, threads) {
		if (err) return err; 
		res.json(threads); 
	});
}

module.exports.getThread = function(req,res,next) {
	threadModel.findById(req.params.id, function(err, thread) {
		if (err) return err; 
		res.json(thread); 
	});
}
module.exports.createThread = function(req,res,next) {
	threadModel.create(req.body, function(err, thread) {
		if (err) return err; 
		res.json(thread); 
	});
}

module.exports.updateThread = function(req,res,next) {
	threadModel.findByIdAndUpdate(req.params.id, req.body, function(err, thread) {
		if (err) return err; 
		res.json(thread); 
	});
}

module.exports.deleteThread = function(req,res,next) {
	threadModel.findByIdAndRemove(req.params.id, req.body, function(err,thread) {
		if (err) return err; 
		res.json({
			"Message": "Thread with the id " + thread.id + " has been removed"
		});
	});
}

//------ aceSchema CRUD -------- 
module.exports.themes = function(req,res,next) {
	aceModel.find(function(err, ace) {
		if (err) return err;
		res.json(data.themes);
	});
}

module.exports.modes = function(req,res,next) {
	aceModel.find(function(err, ace) {
		if (err) return err;
		res.json(data.modes);
	});
}
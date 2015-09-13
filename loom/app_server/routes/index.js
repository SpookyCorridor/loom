var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main'); 
var ctrlApi = require('../controllers/api');
/* GET home page. */
router.get('/', ctrlMain.index); 
router.get('/gallery', ctrlMain.gallery);
//TODO: change to accept an id after testing 
router.get('/editor', ctrlMain.editor);


// api 
router.get('/api/v1/gallery', ctrlApi.gallery);
router.post('/api/v1/gallery', ctrlApi.createThread);
router.get('/api/v1/gallery/:id', ctrlApi.getThread); 
router.put('/api/v1/gallery/:id', ctrlApi.updateThread);
router.patch('/api/v1/gallery/:id', ctrlApi.updateThread);
router.delete('/api/v1/gallery/:id', ctrlApi.deleteThread); 
module.exports = router;







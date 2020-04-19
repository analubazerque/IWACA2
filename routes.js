var express = require('express'),
    router = express.Router(),
    itemCtrl = require('./item-controller');
    http = require('http'), //This module provides the HTTP server functionalities
    path = require('path'), //The path module provides utilities for working with file and directory paths
    

router.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all content will be served

router.post('/items', itemCtrl.createItem);
router.get('/items', itemCtrl.getItems);
router.get('/items/:id', itemCtrl.getItem);
router.delete('/items/:id', itemCtrl.deleteItem);
router.put('/items/:id', itemCtrl.updateItem);

module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer');
var upload = multer({ dest: module.exports.UPLOAD_PATH });

module.exports = router;

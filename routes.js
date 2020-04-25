var express = require('express'),
    router = express.Router(),
    itemCtrl = require('./controllers/item-controller');
    http = require('http'), //This module provides the HTTP server functionalities
    path = require('path'), //The path module provides utilities for working with file and directory paths


router.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all content will be served

router.post('/items', itemCtrl.createItem);
router.get('/items', itemCtrl.getItems);
router.get('/items/:_id', itemCtrl.getItem);
router.delete('/items/:_id', itemCtrl.deleteItem);
router.put('/items/:_id', itemCtrl.updateItem);

module.exports = router;

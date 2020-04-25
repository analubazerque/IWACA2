var Item = require('../models/item');

exports.createItem = function(req, res) { 
    var newItem = new Item(req.body);
    newItem.save(function (err, item) { 
        if (err) { 
            res.status(400).json(err);
            console.log(err)
        }

        res.json(item); 
});
};

exports.getItems = function(req, res) {
  Item.find({}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    } 
    const dairySection = items.filter(item=>item.section == "Dairy");
    const bakerySection = items.filter(item=>item.section == "Bakery");
    const personalHygene = items.filter(item=>item.section == "PersonalHygene");
    const cleaningSection = items.filter(item=>item.section == "Cleaning");
    const fruitAndVegetables = items.filter(item=>item.section == "FruitAndVegetables");
    const obj = [dairySection, bakerySection, personalHygene, cleaningSection, fruitAndVegetables];
    console.log(obj)
    res.json(obj);
  }); 
};

exports.getItem = function(req, res) {
  Item.findOne({_id: req.params.id}, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};

exports.updateItem = function(req, res) {
  Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};

exports.deleteItem = function(req, res) {
  Item.findByIdAndRemove(req.params.id, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};
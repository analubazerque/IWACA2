var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({ 
    section: { 
        type: String,
        enum: ['Dairy', 'Bakery', 'PersonalHygene', 'Cleaning', 'FruitAndVegetables']
    },    
    name: String,
    price: Number
});

module.exports = mongoose.model('Item', itemSchema);
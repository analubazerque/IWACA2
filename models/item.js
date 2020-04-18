var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({ 
    section: { 
        type: String,
        enum: ['Dairy', 'Bakery', 'Personal Hygene', 'Cleaning', 'Fruit and Vegatables']
    },    
    name: String,
    price: float
});

module.exports = mongoose.model('Item', itemSchema);
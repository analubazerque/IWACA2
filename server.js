//IMPORTS
var logger = require("morgan"),
    cors = require("cors"),
    http = require("http"),
    express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose');

require('dotenv').config(); // IMPORT .ENV FILE
var app = express(); // SET APP TO EXPRESS
var port = process.env.PORT;
var userCtrl = require('./controllers/item-controller');
//var DB = "mongodb+srv://myuser:somepass123@ca2-j85aa.mongodb.net/test?retryWrites=true&w=majority";
var DB = process.env.DB;

app.use(bodyParser.json());
app.use(require('./routes'));
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

mongoose.connect(DB);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});
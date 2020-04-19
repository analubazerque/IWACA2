var logger = require("morgan"),
    cors = require("cors"),
    http = require("http"),
    express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose');

require('dotenv').config();
var app = express();
var port = process.env.PORT || 3000;
var userCtrl = require('./item-controller');
var DB = process.env.DB;
//var DB = "mongodb+srv://buuuuu:pass1234@cluster0-9g3f4.mongodb.net/test?retryWrites=true&w=majority"

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes'));

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
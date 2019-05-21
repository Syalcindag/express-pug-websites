var express = require('express');
var websiteController = require('./controllers/websiteController');

var app = express();

//set up template engine
app.set('view engine', 'pug' );


//fire controllers

websiteController(app);

//static files
app.use(express.static('./public'));

//server
app.listen(8080);
console.log('server on');

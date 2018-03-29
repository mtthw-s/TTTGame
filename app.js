const express = require('express');  
const path = require('path');  
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'jade');

app.get('/', function(req, res, next) {  
    res.render('index', { title: 'Hello World!', boxes: [['Box1','Box2','Box3'],['Box4','Box5','Box6'],['Box7','Box8','Box9']] });
});

module.exports = app;








var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')

var addTodo = require('./routes/addTodo');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

// routes
app.use('/addTodo', addTodo);


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

module.exports = app;

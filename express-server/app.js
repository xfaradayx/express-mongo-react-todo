var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var cors = require('cors');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, '../build/static')));

app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000"],
      optionsSuccessStatus: 200
    })
  );
  
// routes
app.use(require('./routes/routes'));

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../build/')});
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

module.exports = app;

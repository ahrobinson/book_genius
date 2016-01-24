var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var config = require('./config/config');
var mongoose = require('mongoose')
var db = require('./api/db/mongo')

mongoose.connect(db.url)

var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));


//create sample user
app.get('/setup', function(req, res) {
  var nick = new db.User({
    username: 'Nick',
    password: 'password',
    admin: true
  });
  console.log('user:',nick)
  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

app.use('/api/users', require('./api/users/routes'));
app.use('/api/comments', require('./api/comments/routes'));

app.use(express.static('client'))
app.listen(port)
console.log('Let there be light!')

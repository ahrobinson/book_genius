var express = require('express')
var app = express()
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', require('./api/users/routes'));
app.use('/api/comments', require('./api/comments/routes'));

app.use(express.static('client'))
app.listen(port)
console.log('Let there be light!')

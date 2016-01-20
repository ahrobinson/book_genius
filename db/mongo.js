var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = require('./models/comments');
var User = require('./models/users');

mongoose.connect('mongodb://localhost/book_genius');

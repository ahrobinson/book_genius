var mongoose = require('mongoose');
var Promise = require('bluebird')
mongoose.promise = Promise;
var Schema = mongoose.Schema;


var comments = new Schema({
  user: String,
  body: String,
  created_at: Date,
});

var Comment = mongoose.model('Comment', comments)

module.exports = Comment;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var users = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: STring, required: true},
  admin: Boolean,
});

var User = mongoose.model('User', users)

module.exports = User;
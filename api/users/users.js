var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var users = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  admin: {type: Boolean, default: false}
});

var User = mongoose.model('User', users)

module.exports = User;

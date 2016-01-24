var Comment = require('../comments/comments');
var User = require('../users/users');



var db = {
  Comment: Comment,
  User: User,
  url: 'mongodb://localhost/book_genius'
}


module.exports = db

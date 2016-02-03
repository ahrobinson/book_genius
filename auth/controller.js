var jwt = require('jsonwebtoken');
var config = require('../config/config');
var User = require('../api/users/users');

exports.login =  function(req, res){
  var usersName = req.body.username;
  var pass = req.body.password;
  console.log(req.body.username)
  User.findOne({
    username: req.body.username
  }).then(function(user){
    console.log('user: ', user)
    if(!user){
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if(user){
      console.log('user found!')
      //password doesn't match
      if(user.password !== pass){
        res.json({ success: false, message: 'Authentication failed. Incorrect password.' });
      } else {
        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, config.secret, {
          expiresIn: 86400
        });

        res.json({
          success: true,
          message: 'Take your token!',
          token: token
        });
      }
    }
  }).then(function(err){
    console.log(err)
  })
}

exports.verify = function(req,res, next){
  var token = req.body.token;
  if(token){
    jwt.verify(token, config.secret, function(err, decoded){
      if(err){
        throw err
      } else {
        req.decoded = docoded;
        next()
      }
    })
  } else {
    res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }

}

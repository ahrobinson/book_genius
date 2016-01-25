var router = require('express').Router();
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var User = require('../api/users/users');

router.post('/', function(req, res){
  var usersName = req.body.username;
  var pass = req.body.password;
  console.log(req.body.username)
  User.findOne({
    username: usersName
  }).then(function(err, user){
    if(err){
      throw err
    }
    console.log('user: ', user)
    if(!user){
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if(user){
      //password doesn't match
      if(user.password !== pass){
        res.json({ success: false, message: 'Authentication failed. Incorrect password.' });
      } else {
        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, config.secret, {
          expiresIn: "24h"
        });

        res.json({
          success: true,
          message: 'Take your token!',
          token: token
        });
      }
    }
  })
});

module.exports = router;

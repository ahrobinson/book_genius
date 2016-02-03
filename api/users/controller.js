var User = require('./users');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');


exports.show = function(req,res){
  User.find({}, function(err, users){
    if(err){
      console.log('error finding users')
    }
    res.json(users);
  })
}

exports.showOne = function(req,res){
  User.findById(req.params.id, function(err, user){
    if(!err){
      res.json(user);
    }
  })

}
exports.create = function(req,res){
  User.findOne({username: req.body.username}, function(err, user){
    console.log(user)
    if(!user){
      console.log('hi')
      var newUser = new User({
        username: req.body.username,
        password: req.body.password,
      })
      newUser.save(function(err){
        if(err){
          res.send(err)
        } else {
          res.send('User saved!')
        }
      })
    } else {
      res.send(err);
    }
  })
}

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

exports.update = function(req,res){

}
exports.delete = function(req,res){

}

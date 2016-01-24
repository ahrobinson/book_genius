var User = require('./users');


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
  User.find({username: req.body.username}, function(err, user){
    console.log(user)
    if(!user.length){
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
exports.update = function(req,res){

}
exports.delete = function(req,res){

}

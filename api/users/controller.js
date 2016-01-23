
exports.show = function(req,res){
  res.send('hi')
  // User.find({}, function(err, users){
  //   if(err){
  //     console.log('error finding users')
  //   }
  //   res.json(users);
  // })
}

exports.showOne = function(req,res){
  User.findById(req.body.id, function(err, user){
    if(!err){
      res.json(user);
    }
  })

}
exports.create = function(req,res){
  User.find({username: req.body.username}, function(err, user){
    if(!user){
      var newUser = new User({
        username: req.body.username,
        password: req.body.password
      })
      newUser.save()
    } else {
  
    }
  })

}
exports.update = function(req,res){

}
exports.delete = function(req,res){

}


exports.show = function(req,res){
  User.find({}, function(err, users){
    if(err){
      console.log('error finding users')
    }
    res.json(users);
  })
}

exports.showOne = function(req,res){
  User.findById(req.body.id, function(err, user){
    if(!err){
      res.json(user);
    }
  })

}
exports.create = function(req,res){

}
exports.update = function(req,res){

}
exports.delete = function(req,res){

}

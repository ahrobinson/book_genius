
exports.show = function(req,res){
  Comment.find({}, function(err, comments){
    if(err){
      console.log('error finding users')
    }
    res.json(comments);
  })
}

exports.showOne = function(req,res){
  Comment.findById(req.body.id, function(err, comment){
    if(!err){
      res.json(comment);
    }
  })

}
exports.create = function(req,res){
  Comment.find({id: req.body._id}, function(err, comment){
    if(!comment){
      var newComment = new Comment({
        user: req.body.user,
        body: req.body.comment
      })
      newComment.save()
    } else {
      // throw new Error 'Error'
    }
  })

}
exports.update = function(req,res){

}
exports.delete = function(req,res){

}

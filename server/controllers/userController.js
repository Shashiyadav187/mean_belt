var mongoose = require('mongoose');
var user = mongoose.model('User');

function UserController(){
  this.index = function(req,res){
    user.find({},function(err,response){
      if(err){
      }else{
        res.json(response);
      };
    });
  };
  this.create = function(req,res){
    user.create(req.body,function(err,result){
      if(err){
      }else{
        res.json(result);
      };
    });
  };
  this.find = function(req,res){
    user.findOne({name:req.body.name},function(err,result){
      if(err){
      }else{
        res.json(result)
      }
    })
  }
  this.show = function(req,res){
    console.log(req.body)
  };
  this.findid = function(req,res){
    user.findOne({_id:req.body.id},function(err,result){
      if(err){
      }else{
        res.json(result)
      }
    })
  }
};
module.exports = new UserController();

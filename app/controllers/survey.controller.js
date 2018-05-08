var express = require('express')

module.exports.showMainPage=function(req,res){
  res.render('mainpage.ejs')
}

module.exports.showResult=function(req,res){
  username = req.body.user_name
  if(username!="dog"){
    resultstr = "You are not dog!"
    res.render('logresult.ejs', {result: resultstr})
  }else{
    resultstr = "welcome dog!"
    res.render('logresult.ejs', {result: resultstr})
  }
}
module.exports.showRegisterForm=function(req,res){
  res.render('register.ejs')
}


module.exports.showRegisterResult=function(req,res){
    userfisrtname = req.body.first_name
    result = "welcome! "+userfisrtname
    res.render('registerresult.ejs',{result:result})
}

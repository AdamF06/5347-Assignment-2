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

// sudo npm install --save body-parser

var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

// application/x-www-form-urlencoded parser 
app.post('/login',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
  });

  app.listen(3000,function(){
    console.log("Started on PORT 3000");
  });
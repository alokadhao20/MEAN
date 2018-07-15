var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// for parsing application/json
app.use(bodyParser.json()); 

// form-data parsing
let multer = require('multer');
let upload = multer();

app.post('/send', upload.fields([]), (req, res) => {
    let formData = req.body;
    console.log('form data', formData);
    console.log('form data', formData.user);
    console.log('form data', formData.Password);
    res.sendStatus(200);
  });

var port = process.env.PORT || 3000;  
app.listen(port,function(){
console.log("Started on PORT 3000");
});
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// for parsing application/json
app.use(bodyParser.json()); 


app.delete('/api/:company/:id', function (req, res) {
    var company = req.params.company;
    var id = req.params.id;
    console.log("company - ", company);
    console.log("id - ", id);
    res.sendStatus(200);
});

var port = process.env.PORT || 3000;  
app.listen(port,function(){
console.log("Started on PORT 3000");
});
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// for parsing application/json
app.use(bodyParser.json());

app.all('/secret', function (req, res) {
    console.log('Accessing the secret section ...');
    res.sendStatus(200);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Started on PORT 3000");
});
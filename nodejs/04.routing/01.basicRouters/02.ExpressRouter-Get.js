var express = require('express');
var app = express();


var url = require('url');

app.get('/', function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query);
    res.send({
        'data': query
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Started on PORT 3000");
});
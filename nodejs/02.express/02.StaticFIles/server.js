var express = require('express');
var app = express();


app.use(express.static('public'))
// eg:- http://localhost:3000/express02.png

app.use(express.static('static'))
// eg:-  http://localhost:3000/static01.png


// custom path for static file
app.use('/files', express.static('files'))

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Started on PORT 3000");
});
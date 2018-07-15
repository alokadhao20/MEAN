var express = require('express');
var app = express();

app.locals.environment = 'staging';

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Started on PORT", port, " environment = ", app.locals.environment);
});
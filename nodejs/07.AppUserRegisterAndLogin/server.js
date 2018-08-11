const express = require('express');
const app = express();
const database = require('./controllers/common/database');
const router = require('./routers/setupRouters');
var async = require("async");
var bodyParser = require("body-parser");
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

async.waterfall([
    function (callback) {
        database.connect(function (err, db) {
            if (err) {
                callback(err, null);
            } else {
                console.log("connected to db");
                callback(null, db);
            }
        });
    },
    function (db, callback) {
        router(app, db, function (err, result) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, 'all setup');
            }
        })
    }
], function (err, result) {
    if(err){
        console.log("error in pipeline to start server", err);
    } else {
        var port = process.env.PORT || 3000;
        app.listen(port, function () {
            console.log("Started on PORT", port);
        });
    }
});


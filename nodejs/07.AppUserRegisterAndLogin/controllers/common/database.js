var MongoClient = require('mongodb').MongoClient;

exports.connect = function (callback) {
    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/MyDb", {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) {
            console.log("Issue with mongodb connection", err);
            callback(err, null);
        } else {
            //console.log("database connection successful ", db);
            callback(null, db)
        }
    });
};
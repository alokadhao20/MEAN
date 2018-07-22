var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", { useNewUrlParser: true }, function (err, db) {
    if(err) {
        console.log("Issue with mongodb connection", err);
    } else {
        console.log("database connection successful ", db);
    }
});
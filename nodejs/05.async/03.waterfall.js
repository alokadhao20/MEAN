var async = require("async");
async.waterfall([
    function(callback) {
        console.log("In one")
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        console.log("In two")
        // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
    },
    function(arg1, callback) {
        console.log("In three")
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
    console.log("In result - ", result)
    // result now equals 'done'
});
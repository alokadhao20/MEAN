var async = require("async");
async.parallel([
    function(callback) {
        setTimeout(function() {
            console.log("In one")
            callback(null, 'one');
        }, 2000);
    },
    function(callback) {
        setTimeout(function() {
            console.log("In two")
            callback(null, 'two');
        }, 1000);
    }
],
// optional callback
function(err, results) {
    console.log("results  -", results)
});
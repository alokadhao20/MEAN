var async = require("async");

async.series([
    function(callback) {
        setTimeout(function() {
            console.log("In one")
            callback(null, 'one');
        }, 1000);
    },
    function(callback) {
        setTimeout(function() {
            console.log("In two")
            callback(null, 'two');
        }, 2000);
    }
],
// optional callback
function(err, results) {
    console.log("results - ", results)
    // results is now equal to ['one', 'two']
});
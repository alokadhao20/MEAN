var async = require("async");
let counter = 0;
async.forever(
    
    function(callback) {
        // console.log("I am in function");
        setTimeout(function() {
            console.log("counter - ", counter)
            counter ++;
            callback(null)
        }, 2000);
      
        // next is suitable for passing to things that need a callback(err [, whatever]);
        // it will result in this function being called again.
    },
    function(err) {
        console.log("I am in error")
        // if next is called with a value in its first parameter, it will appear
        // in here as 'err', and execution will stop.
    }
);
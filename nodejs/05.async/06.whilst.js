var async = require("async");
let count = 0;
let total = 5;
async.whilst(
    function () {
        return count < total;
    },
    function (callback) {
    //    console.log("count = ", count);
       count ++;
       console.log("count = ", count);
       callback(null, count);
    },
    function (err, n) {
        if (err) {
            console.log("error = ", err);
        } else {
            console.log("result n = ", n);
        }
    }
);
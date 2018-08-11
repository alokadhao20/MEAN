const userRouter = require('./userRouter/userRouter');
var async = require("async");
module.exports = function (app, db, finalCallback) {
    async.series([
        function (callback) {
            userRouter(db, function (err, userRoute) {
                if (err) {
                    callback(err, null);
                } else {
                    app.use('/api/user', userRoute);
                    callback(null, 'done');
                }
            });
        }
    ],
    function (err, results) {
        if (err) {
            finalCallback(err, null)
        } else {
            finalCallback(null,results);
        }
    });
};
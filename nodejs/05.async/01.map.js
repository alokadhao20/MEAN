var async = require("async");

let files = ['file1','file2','file3','file4', 'file5', 'file6'];

async.map(files, processFiles, function(err, results) {
    console.log("results - ", results);
});

function processFiles(file, callback) {
    console.log("file - ", file);
    callback(null,'done');
}



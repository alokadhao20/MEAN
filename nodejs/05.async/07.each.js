
var async = require("async");
let openFiles = ['file1','file2','file3','file4', 'file5', 'file6'];

  async.each(openFiles, processFile, function(err) {
      if( err ) {
        console.log('A file failed to process');
      } else {
        console.log('All files have been processed successfully');
      }
  });

  function processFile(file, callback) {
    console.log('Processing file ' + file);
    if( file.length > 32 ) {
      console.log('This file name is too long');
      callback('File name too long');
    } else {
      console.log('File processed');
      callback();
    }
}
var express = require('express');
var app = express();
let logger = require("./logger.js");

let error = {
    "data": {
        "title": "error",
    }
}

let warn = {
    "data": {
        "title": "warn",
    }
}

let info = {
    "data": {
        "title": "info",
    }
}

let verbose = {
    "data": {
        "title": "verbose",
    }
}

let debug = {
    "data": {
        "title": "debug",
    }
}

let silly = {
    "data": {
        "title": "silly",
    }
}



logger.log('error', 'error data ', error);
logger.log('warn', 'warn data ', warn);
logger.log('info', 'info data ', info);
logger.log('verbose', 'verbose data ', verbose);
logger.log('debug', 'debug data ', debug);
logger.log('silly', 'silly data ', silly);

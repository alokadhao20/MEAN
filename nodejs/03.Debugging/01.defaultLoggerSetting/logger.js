var winston = require('winston');

// Default log level
// { 
//     error: 0, 
//     warn: 1, 
//     info: 2, 
//     verbose: 3, 
//     debug: 4, 
//     silly: 5 
//   }
var logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      // - Write all logs error (and below) to `error.log`.
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // - Write to all logs with level `info` and below to `combined.log` 
      new winston.transports.File({ filename: 'combined.log' }),
      // - Print on the console screen
      new winston.transports.Console({ level: 'error' }),
      new winston.transports.Console({ level: 'warn' })
    ]
  });

module.exports = logger;

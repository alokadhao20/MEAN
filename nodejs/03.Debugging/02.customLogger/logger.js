var winston = require('winston');

const myCustomLevels = {
    levels: {
      veryimportant: 0,
      important: 1,
      canskip: 2,
      ignore: 3
    },
    colors: {
      veryimportant: 'blue',
      important: 'green',
      canskip: 'yellow',
      ignore: 'red'
    }
  };

  const logger = winston.createLogger({
    // level: 'info',
    levels: myCustomLevels.levels,
    format: winston.format.json(),
    transports: [
      // - Write all logs veryimportant (and below) to `veryimportant.log`.
      new winston.transports.File({ filename: 'veryimportant.log', level: 'veryimportant' }),
      // - Print on the console screen
      new winston.transports.Console({ level: 'veryimportant' })
    ]
  });

winston.addColors(myCustomLevels.colors);

module.exports = logger;
let logger = require("./logger.js");
let veryimportant = {
    "data": {
        "title": "veryimportant",
    }
}

let important = {
    "data": {
        "title": "important",
    }
}

let info = {
    "data": {
        "title": "info",
    }
}

let canskip = {
    "data": {
        "title": "canskip",
    }
}

let ignore = {
    "data": {
        "title": "ignore",
    }
}

logger.log('veryimportant', 'error veryimportant ', veryimportant);
logger.log('important', 'warn important ', important);
logger.log('canskip', 'info canskip ', canskip);
logger.log('ignore', 'ignore data ', ignore);
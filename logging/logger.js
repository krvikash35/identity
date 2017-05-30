var bunyan = require('bunyan');
var log;

if (process.env.NODE_ENV = "PROD") {
    log = bunyan.createLogger({
        name: 'myapp',
        streams: [{
            stream: process.stderr
            // `type: 'stream'` is implied
        },
        {
            type: 'file',
            path: 'identity.log',
            level: bunyan.ERROR
        }]
    });
} else {

}

module.exports = log;
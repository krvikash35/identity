var bunyan = require('bunyan');
var log;

if (process.env.NODE_ENV === "PROD") {
    console.log("prod logger")
    log = bunyan.createLogger({
        name: 'myapp',
        streams: [{
            name: 'prod_std_stream',
            type: 'stream',
            stream: process.stdout,
            level: bunyan.WARN,
            serializers: bunyan.stdSerializers
        },
        {
            name: 'prod_file_stream',
            type: 'file',
            path: 'identity.log',
            level: bunyan.ERROR,
            serializers: bunyan.stdSerializers
        }]
    });
} else {
    console.log("dev logger")
    log = bunyan.createLogger({
        name: 'myapp',
        memory: new Date(),
        serializers: {
            err: bunyan.stdSerializers.err,
            req: bunyan.stdSerializers.req,
            res: bunyan.stdSerializers.res    
        },
        streams: [{
            name: 'dev_std_stream',
            type: 'stream',
            stream: process.stdout,
            level: bunyan.DEBUG
        },
        {
            name: 'dev_file_stream',
            type: 'file',
            path: 'identity.log',
            level: bunyan.INFO
        }]
    });
}

module.exports = log;

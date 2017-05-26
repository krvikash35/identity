var tap = require('tap'); 
var config = require('../config/identity.config');

tap.true(config.db.connUrl, "config should have db url");
tap.type(config.db.connOpt, Object, "config should have db connection option object");
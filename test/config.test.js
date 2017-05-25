var test = require('tape'); 
var assert = require('assert');
var config = require('../config/identity.config');

test("config should have defined connUrl", t => {
    t.doesNotEqual(config.db.connUrl, null);
    t.test()
    t.end()
    assert.
})
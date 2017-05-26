var test = require('tap').test;
var sinon = require('sinon');

var db = require('services/db.service');


test("db module should have proper properties/method", assert => {
    const expected = ['getConnection'];
    const actual = Object.keys(db);
    assert.same(actual, expected);
    assert.end()
})





test("db.getconnection should reject with error on invalid url", assert => {
    const dburl = "mongodb://vikash:12345678@ds153521.mlab.com:53521/identity1"
    return db.getConnection(dburl)
        .catch(err => {
            const expected = 'MongoError';
            const actual = err.name
            assert.equal(actual, expected);
            assert.end()
        })
});


test("db.getconnection should resolve to connection on valid url", assert => {
    const dburl = "mongodb://vikash:12345678@ds153521.mlab.com:53521/identity"
    db.getConnection(dburl)
        .then(conn => {
            assert.true(conn);
            assert.type(conn, Object);
            conn.close()
            assert.end()
        })
});
var tap = require('tap');
var db = require('../services/db.service');

var db_module_prop_expect = ['getConnection']
tap.same(Object.keys(db), db_module_prop_expect, "db module should have proper properties");

tap.test("db.getconnection", t=>{
    return db.getConnection()
             .then( conn => {
                 t.ok(conn, "connection should be truthy");
             })
});


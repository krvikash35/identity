var test = require('tape');

function getNumber(){
    return 2;
}

test('string comparision test', t => {
    t.plan(4)
    t.equal(3, getNumber())
})
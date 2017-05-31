const http = require('http');
const path = require('path');

const express = require('express');
console.log("nodepath", process.env.NODE_PATH)
var logger = require('logging/logger');


const app = express();
app.listen(8082, ()=>{
  console.log("listening on 8082");
})

logger.info("Hi")
app.get("/service", (req, res)=>{
    logger.info({req: req})
    // logger.info(req)
    res.status(200).send("HI")
    logger.info({res: res})
})





// var me = {
//     login: 'krvikash35',
//     name: 'vikash kumar'
// }
// var err = new Error("sample error");
// logger.error(me)
// // logger.error({err: me}, "error occured")
// logger.info( {user: me}, 'logged in' )
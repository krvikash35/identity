const db = require('services/db.service');
const config = require('config/config');

db.getConnection(config.db.connUrl)
  .then( conn => {
    console.log("returned connection");
  })
config.db.connOpt ={
  name: 'vikash'
}

db.getConnection(config.db.connUrl)
  .then( conn => {
    console.log("returned connection");
  })

  db.getConnection(config.db.connUrl)
  .then( conn => {
    console.log("returned connection");
  })
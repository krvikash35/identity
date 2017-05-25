var mongoCli = require('mongodb').MongoClient;
const config = require('../config/identity.config');

const dburl = config.db.connOpt;
var db = null;


var getConnection = function(){
    if(db){
        return db;
    }
    return db = new Promise( (resolve, reject) =>{
        mongoCli.connect(dburl, (err, db){
            if ( err ){
                db = null;
                return reject(err);
            }else{
                return resolve(db);
            } 
            
        })
    });
}

exports.getConnection = getConnection;
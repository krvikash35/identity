var mongoCli = require('mongodb').MongoClient;
// const config = require('config/config');

// const dburl = config.db.connUrl;
// const dbopt = config.db.connOpt;
// var db = null;


// var getConnection = function getConnection(dburl, dbopt={}){
//     if(db){
//         return db;
//     }
//     return db = new Promise( (resolve, reject) =>{
//         mongoCli.connect(dburl, dbopt, (err, conn)=>{
//             if ( err ){
//                 db = null;
//                 return reject(err);
//             }else{
//                 return resolve(conn);
//             }           
//         })
//     });
// }


// exports.getConnection = getConnection;


class DBService {
    

}
const http = require('http');
const path = require('path');

const express = require('express');

const db = require('services/db.service');
const config = require('config/config');

const app = express();
app.listen(8082, ()=>{
  console.log("listening on 8082");
})

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get("/login", (req, res)=>{
  res.sendFile( path.join( __dirname,  "public/html/login.html") )
  
})


app.get("/loginwithgoogle", (req, res)=>{
  res.redirect(302, "http://google.com");
})


const gauth = require('services/auth/auth.google.service')

async function demo(){


try{
  let data = await gauth.getDiscDoc(config.auth.openid_google.discovery_endpoint);
  console.log("data", data);
}catch(e){
  console.log("error", e)
}

}
demo()
var db = {
    connUrl: "mongodb://vikash:12345678@ds153521.mlab.com:53521/identity",
    connOpt: {
        connectTimeoutMS: 5000
    }
}

var auth = {
    openid_google: {
        discovery_endpoint: "https://accounts.google.com/.well-known/openid-configuration1",
        client_id: "342742052739-sj6cmqv7s70jna9ae4go0dj0204hte5l.apps.googleusercontent.com",
        client_secret: "NQABarXn-2bpFcXTOVn0xtjE",
        redirect_uri: "http://localhost:3000/oauth2callback"
    },
    openid_microsoft: {

    }
}

module.exports.db = db;
module.exports.auth = auth;

// function getAuthUrl() {
//     let googleOauthStep1Url = prop.idProvider.google.oauth2Step1UrlEP + "scope=" +
//         encodeURIComponent(prop.idProvider.google.scope) + "&response_type=" +
//         encodeURIComponent(prop.idProvider.google.response_type) + "&client_id=" +
//         encodeURIComponent(prop.idProvider.google.client_id) + "&access_type=" +
//         encodeURIComponent(prop.idProvider.google.access_type) + "&redirect_uri=" +
//         encodeURIComponent(prop.oauth2.callbackurl)

const http = require('http');
const got = require('got');

class GOPIDClient{

    constructor(client_id, client_secret, redirect_uri){
        this.client_id = client_id
        this.client_secret = client_secret
        this.redirect_uri = redirect_uri
    }

    async getDiscDoc(discurl){
        let data;
        try {
            data = await got(discurl)
            return data;
        } catch (error) {
            console.error(error.type)
            let err = new Error("Error while getting discovery document")
            err.name = "My error"
            Object.assign(err, error)
            throw err;
        }
    }

}



module.exports = new GOPIDClient();
 
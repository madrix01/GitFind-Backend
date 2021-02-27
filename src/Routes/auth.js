const router = require('express').Router();
const dotenv = require('dotenv');
const axios = require('axios');
const HandyStorage = require('handy-storage');
const stringify = require('json-stringify-safe');

const storage = new HandyStorage('./store.json');

dotenv.config();
let token;


router.get('/login', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=repo`);
});

router.get('/oauth_callback', async (req, res) => {
    console.log("Here");
    const body = {
        client_id : process.env.CLIENT_ID,
        client_secret : process.env.CLIENT_SECRET,
        code : req.query.code
    }
    const opts = {headers : {accept : 'application/json'}};
    await axios.post(`https://github.com/login/oauth/access_token`, body, opts)
        .then(res => res.data['access_token'])
        .then(async _token => {
            token = _token
        })
        .catch(err => res.status(500).send(err));

    const resp = await axios.get('https://api.github.com/user', {
        headers: {
            'Authorization' :
            `token ${token}`
        }
    })
    await storage.setState({
        username : resp.data.login
    })
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script>
            window.tokenData = '`+token+`';
            window.close();
        </script>
    </body>
    </html>`,  {root: __dirname});
})


module.exports = {
    router : router,
}
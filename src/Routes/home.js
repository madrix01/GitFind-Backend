const router = require('express').Router();
const axios = require('axios');
const admin = require('firebase-admin');
const serviceAcc = require('../../database_secret.json');
const HandyStorage = require('handy-storage');

const storage = new HandyStorage();
storage.connect('./store.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAcc),
})

const db = admin.firestore();

// All repo
router.get('/user', async (req, res) => {
    res.send('Fuck you')
})

//Post a repo
router.post('/postRepo', async (req, res) => {
    console.log(req);
    res.send("Fuck");
})

module.exports = router
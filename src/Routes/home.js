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
    var resp = await axios.get(`https://api.github.com/repos/${storage.state.username}/${req.body.repoName}`);    
    resp = resp.data;
    const body = {
        repoName : req.body.repoName,
        link : `https://github.com/${storage.state.username}/${req.body.repoName}`,
        tags : req.body.tags,
        level : req.body.level,
        readme : `https://github.com/${storage.state.username}/${req.body.repoName}/blob/main/readme.md`,
        updated_at : resp.updated_at,
        stars: resp.stargazers_count,
        forks : resp.forks,
        language: resp.language
    }
    await axios.get(`https://github.com/${storage.state.username}/${req.body.repoName}/blob/main/readme.md`).catch(err => body.readme = null);
    // if(checkReadme.status === 404){
    //     body.readme = null
    // }
    const repoRef = db.collection('repos').doc(req.body.repoName);

    await repoRef.set(body);
    console.log(body);
    res.send("Fuck");
})

module.exports = router
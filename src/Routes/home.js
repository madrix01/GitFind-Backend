const router = require('express').Router();
const axios = require('axios');
const HandyStorage = require('handy-storage');
const db = require('../initFirebase');

const storage = new HandyStorage();
storage.connect('./store.json')



// All repo
router.get('/user', async (req, res) => {
    const resp = await axios.get(`https://api.github.com/users/${storage.state.username}`)
    res.json(resp.data)
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
        readme : `https://github.com/${storage.state.username}/${req.body.repoName}/blob/main/README.md`,
        updated_at : resp.updated_at,
        stars: resp.stargazers_count,
        forks : resp.forks,
        language: resp.language
    }
    await axios.get(`https://github.com/${storage.state.username}/${req.body.repoName}/blob/main/README.md`).catch(err => body.readme = null);

    const repoRef = db.collection('repos').doc(req.body.repoName);

    await repoRef.set(body);

    res.json(body);
})

module.exports = router
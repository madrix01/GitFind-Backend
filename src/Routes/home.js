const router = require('express').Router();
const axios = require('axios');
const { response } = require('express');
const HandyStorage = require('handy-storage');
const db = require('../initFirebase');

const storage = new HandyStorage();
storage.connect('./store.json')



// All repo
router.get('/user', async (req, res) => {
    console.log(storage.state.username);
    const resp = await axios.get(`https://api.github.com/users/${storage.state.username}`)
        .catch(err => res.json({error : err}))
    res.json(resp.data)
})

//Post a repo
router.post('/postRepo', async (req, res) => {

    var resp = await axios.get(`https://api.github.com/repos/${storage.state.username}/${req.body.repoName}`)
        .catch(res.json({"error" : "user not authenticated"}));    
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
        languages: resp.language
    }
    await axios.get(`https://api.github.com/repos/${storage.state.username}/${req.body.repoName}/readme`)
        .then(resp => resp.data)
        .then(data => body.readme = data.download_url)
        .catch(err => body.readme = null)

    const repoRef = db.collection('repos').doc(req.body.repoName);
    await repoRef.set(body);

    res.json(body);
})


// Post collaboration request 

router.post('/postCollaboration', async (req, res) => {
    const body = {
        username : storage.state.username,
        mdProfile : null,
        tags : req.body.tags,
        profile_link : `https://github.com/${storage.state.username}`,
        level : req.body.level,
        avatar_url : `https://avatars.githubusercontent.com/${storage.state.username}`
    }

    await axios.get(`https://api.github.com/repos/${storage.state.username}/${storage.state.username}/readme`)
        .then(resp => resp.data)
        .then(data => body.mdProfile = data.download_url)
        .catch(err => body.mdProfile = null)

    const userRef = db.collection('users').doc(storage.state.username);
    await userRef.set(body);

    res.json(body);
})

router.get('/feed', async (req, res) => {
    var resp = await db.collection('repos').get();
    var repoDoc = resp.docs.map(doc => doc.data());
    res.json(repoDoc);
})

module.exports = router
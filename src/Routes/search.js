const router = require('express').Router();

const HandyStorage = require('handy-storage');
const db = require('../initFirebase');
const lunr = require('lunr');


const storage = new HandyStorage();
storage.connect('./store.json')


router.post('/repo', async (req, res) => {
    var resp = await db.collection('repos').get();
    var repoDoc = resp.docs.map(doc => doc.data());
    var idx = lunr(function (){
        this.ref('repoName');
        this.field('tags');
        this.field('level');
        repoDoc.forEach(function (doc) {
            this.add(doc);
        }, this);
    })
    var result = idx.search(req.body.tagSearch);

    var resDoc = [];
    result.forEach((ele) => {
        resDoc.push(repoDoc.find(element => element.repoName === ele.ref));
    })

    res.json(resDoc);
})


router.post('/collaborators', async (req, res) => {
    var resp = await db.collection('users').get();
    var userDoc = resp.docs.map(doc => doc.data());
    var idx = lunr(function (){
        this.ref('username');
        this.field('tags');
        this.field('level');
    })

    var result = idx.search(`${req.body.tagSearch} ${req.body.level}`);
    var resDoc = [];
    result.forEach((ele) => {
        resDoc.push(userDoc.find(element => element.username === ele.ref));
    })

    res.json(resDoc);
})

module.exports = router
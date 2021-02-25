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

module.exports = router
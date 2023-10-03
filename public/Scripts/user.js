const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');



router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.get('/', async (req,res)=> {
    const userDB_id = req.query.id;
    const UserDB = await USER.findOne({_id: userDB_id});
    res.json(UserDB)
})

router.post('/', async (req,res) => {
    if (req.body.imagename) {
        USER.updateOne(
            { "_id": req.body.id}, 
            {$set: {"imagename": req.body.imagename}}, 
            {upsert: true}
        )
    }
})


module.exports = router;



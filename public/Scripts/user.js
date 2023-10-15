const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');
const bcrypt = require('bcryptjs');
const { hashPassword } = require('../../utils/helpers');


router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.get('/', async (req,res)=> {
    const userDB_id = req.query.id
    const userDB_email = req.query.email
    if (userDB_id) {
        const UserDB = await USER.findOne({_id: userDB_id});
        if (!UserDB) {
            res.json({'message': 'User does not exist'})
        } else {
            res.json(UserDB)
        }
        
    } else if (userDB_email) {
        const UserDB = await USER.findOne({email: userDB_email});
        if (!UserDB) {
            res.json({'message': 'User does not exist'})
        } else {
            res.json(UserDB)
        }
        
    } else {
        res.json({'message':'Invalid params'})
    }
 
})

router.post('/', async (req,res) => {
    if (req.body.imagename) {
        await USER.updateOne(
            { _id: req.body.id}, 
            {$set: {"imagename": req.body.imagename}}, 
            {upsert: true}
        )
        const UserDB = await USER.findOne({_id: req.body.id});
        res.json(UserDB)
    }
    if (req.body.password) {
        const password = await hashPassword(req.body.password);
        await USER.updateOne(
            { _id: req.body.id}, 
            {$set: {"password": password}}, 
            {upsert: true}
        )
        const UserDB = await USER.findOne({_id: req.body.id});
        res.json(UserDB)
    }
    if (req.body.username) {
        await USER.updateOne(
            { _id: req.body.id}, 
            {$set: {"username": req.body.username}}, 
            {upsert: true}
        )
        const UserDB = await USER.findOne({_id: req.body.id});
        res.json(UserDB)
    }
    if (req.body.email) {
        await USER.updateOne(
            { _id: req.body.id}, 
            {$set: {"email": req.body.email}}, 
            {upsert: true}
        )
        const UserDB = await USER.findOne({_id: req.body.id});
        res.json(UserDB)
    }
})


module.exports = router;



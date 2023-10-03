const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');
const bcrypt = require('bcryptjs');
const { hashPassword } = require('../../utils/helpers');
const session = require('express-session');

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
    const {username, email} = req.body;
    let pass = req.body.password;
    const password = await hashPassword(req.body.password);
    console.log({ username,email,password});
    const userDB = await USER.findOne({$or: [{email}]});
    
    if (!password || !email ) {
        res.status(406)
        return res.json({"message": `Enter Valid Details.`})
    } 
    
    else if (pass.length < 5) {
        res.status(401)
        res.json({"message": "Password too short (5 letters or more)."})
    } 
    
    else if (req.body.password !== req.body.passwordConfirm) {
        res.status(406)
        return res.json({"message": "Passwords don't match."})
    } 
    
    else if (userDB) {
        res.status(406)
        return res.json({"message": "User already Exists"})    } 
        
    else {
        const newUser = await USER.create({ username, email, password});
        console.log(newUser.username);
        req.session.user = newUser;
        req.session.save();
        res.status(200);
        return res.json({"message": "Welcome", "token_id": newUser.id, "token_name": newUser.username, "token_email": newUser.email, "token_imagename": newUser.imagename})
    }  
})


module.exports = router;



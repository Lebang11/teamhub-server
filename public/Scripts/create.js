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

router.get('/', (req,res)=> {
    res.sendStatus(200)
})

router.post('/', async (req,res) => {
    const {username, email} = req.body;
    let pass = req.body.password;
    const password = hashPassword(req.body.password);
    console.log({ username,email,password});
    const userDB = await USER.findOne({$or: [{email}]});
    
    if (!password || !email ) {
        res.status(406)
        res.json({"message": `Enter Valid Details. ${password}`})
    } 
    
    else if (pass.length < 5) {
        res.status(401)
        res.json({"message": "Password too short (5 letters or more)."})
    } 
    
    else if (req.body.password !== req.body.passwordConfirm) {
        res.status(406)
        res.json({"message": "Passwords don't match."})
    } 
    
    else if (userDB) {
        res.status(406)
        res.json({"message": "User already Exists"})    } 
        
    else {
        const newUser = await USER.create({ username, email, password});
        console.log(newUser);
        req.session.user = newUser;
        req.session.save();
        res.status(200);
        res.json({"message": "Welcome", "token": newUser.id})
    }  
})


module.exports = router;

const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');
const { comparePassword } = require('../../utils/helpers');
const bcrypt = require('bcryptjs')

router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../login.html'))
})

router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.post('/',async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(406);
        return res.json({"message": "Enter valid information"})
    };
    
    const userDB = await USER.findOne({email});

    if (!userDB) {
        res.status(406)
        return res.json({"message": "Password is incorrect"})
    };
    
    const isValid = await comparePassword(password, userDB.password)
    
    if (!isValid) {
        res.status(406)
        return res.json({"message": "Password is incorrect"})
    } else if (isValid) {
        req.session.user = userDB;
        req.session.save();
        console.log('Welcome Back!', userDB.username);
        return res.json({"message": "Welcome", "token": userDB.id});
    }
})

module.exports = router;

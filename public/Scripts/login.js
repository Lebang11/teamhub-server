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

router.post('/',async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) res.send(400);
    const userDB = await USER.findOne({email});
    if (!userDB) return console.log('Password not correct');
    const isValid = comparePassword(password, userDB.password)
    if (!isValid) {
        console.log('Password not correct')
    } else if (isValid) {
        console.log('Welcome Back!');
        req.session.user = userDB;
        req.session.save();
        res.redirect('/main');
    }
})

module.exports = router;
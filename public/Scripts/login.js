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
    if (!email || !password) res.send(`
    <a href="https://team-hub.onrender.com/">
    <button class="submit-button back-button">Back</button>
    </a>
    <p>Enter valid details</p>
    `);
    const userDB = await USER.findOne({email});
    if (!userDB) return res.send(`<a href="https://team-hub.onrender.com/">
    <button class="submit-button back-button">Back</button>
    </a>
    <p>Password is incorrect</p>
    `);
    const isValid = comparePassword(password, userDB.password)
    if (!isValid) {
        res.send(`
        <a href="https://team-hub.onrender.com/">
        <button class="submit-button back-button">Back</button>
        </a>
        <p>Password is incorrect</p>
        `)

    } else if (isValid) {
        console.log('Welcome Back!');
        req.session.user = userDB;
        req.session.save();
        res.redirect('/main');
    }
})

module.exports = router;
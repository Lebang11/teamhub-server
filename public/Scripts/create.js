const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');
const bcrypt = require('bcrypt');
const { hashPassword } = require('../../utils/helpers')





const users = [{
    name: "Lebang Nong",
    email: "lebangnong@gmail.com",
    preffered: "Lebang"
}];



router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../create.html'))
})

router.post('/', async (req,res) => {
    const email = req.body.email;
    let pass = req.body.password;
    const password = hashPassword(req.body.password)
    const userDB = await USER.findOne({$or: [{email}]});
    if (!password || !email ) {
        console.log('yikes')
        res.sendStatus(400);
    } else if (req.body.password !== req.body.passwordConfirm) {
        console.log('Passwords dont match')
    } else if (pass.length <= 7) {
        console.log('password too short')
    } else if (userDB) {
        console.log('User already Exists')
    } else {
        const newUser = await USER.create({ email, password});
        console.log(newUser);
    }  
})


module.exports = router;
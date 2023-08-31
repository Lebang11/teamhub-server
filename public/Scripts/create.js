const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');
const bcrypt = require('bcryptjs');
const { hashPassword } = require('../../utils/helpers');
const session = require('express-session');





const users = [{
    name: "Lebang Nong",
    email: "lebangnong@gmail.com",
    preffered: "Lebang"
}];



router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../create.html'))
})

router.post('/', async (req,res) => {
    const {username, email} = req.body;
    let pass = req.body.password;
    const password = hashPassword(req.body.password)
    const userDB = await USER.findOne({$or: [{email}]});
    if (!password || !email ) {
        res.sendStatus(400);
    } else if (pass.length <= 7) {
        res.send(
            `
            <style>
                .back-button {
                    height: 30px;
                    background-color: rgb(0, 175, 116);
                    color: white;
                }
                
                .back-button:hover {
                    background-color: rgb(255, 106, 0);
                }
            </style>
            <a href="https://team-hub.onrender.com/create">
            <button class="submit-button back-button">Back</button>
            </a>
            <p>Password is too short</p>`
            )
    } else if (req.body.password !== req.body.passwordConfirm) {
        res.send(
            `
            <style>
                .back-button {
                    height: 30px;
                    background-color: rgb(0, 175, 116);
                    color: white;
                }
                
                .back-button:hover {
                    background-color: rgb(255, 106, 0);
                }
            </style>
            <a href="https://team-hub.onrender.com/create">
            <button class="submit-button back-button">Back</button>
            </a>
            <p>Passwords dont match</p>`
            )
    } else if (userDB) {
        res.send(
            `
            <style>
                .back-button {
                    height: 30px;
                    background-color: rgb(0, 175, 116);
                    color: white;
                }
                
                .back-button:hover {
                    background-color: rgb(255, 106, 0);
                }
            </style>
            <a href="https://team-hub.onrender.com/create">
            <button class="submit-button back-button">Back</button>
            </a>
            <p>User already Exists</p>`
            )
    } else {
        const newUser = await USER.create({ username, email, password});
        console.log(newUser);
        req.session.user = newUser;
        req.session.save();
        res.redirect('/main');
    }  
})


module.exports = router;
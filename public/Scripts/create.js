const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');
const bcrypt = require('bcryptjs');
const { hashPassword } = require('../../utils/helpers');
const session = require('express-session');



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
        res.send(
                `
        <style>
            .submit-button {
                font-family: Roboto;
                font-size: 20px;
                background-color: rgb(255, 255, 255);
                height: 50px;
                width: 100px;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.15s;
            }
            
            .submit-button:hover {
                color: white;
                background-color: aqua;
                transform: scale(1.2);
            }
        
            .back-button {
                height: 30px;
                background-color: rgb(66,69,73);
                color: white;
            }
            
            .back-button:hover {
                background-color: rgb(191,155,48);
            }
        </style>
        <a href="https://team-hub.netlify.app/create">
        <button class="submit-button back-button">Back</button>
        </a>
        <p>Enter valid details</p>
        `
        )
    } else if (pass.length <= 7) {
        res.send(
            `
            <style>
                .submit-button {
                    font-family: Roboto;
                    font-size: 20px;
                    background-color: rgb(255, 255, 255);
                    height: 50px;
                    width: 100px;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.15s;
                }
                
                .submit-button:hover {
                    color: white;
                    background-color: aqua;
                    transform: scale(1.2);
                }
            

                .back-button {
                    height: 30px;
                    background-color: rgb(66,69,73);
                    color: white;
                }
                
                .back-button:hover {
                    background-color: rgb(191,155,48);
                }
            </style>
            <a href="https://team-hub.netlify.app/create">
            <button class="submit-button back-button">Back</button>
            </a>
            <p>Password is too short</p>`
            )
    } else if (req.body.password !== req.body.passwordConfirm) {
        res.send(
            `
            <style>
                .submit-button {
                    font-family: Roboto;
                    font-size: 20px;
                    background-color: rgb(255, 255, 255);
                    height: 50px;
                    width: 100px;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.15s;
                }
                
                .submit-button:hover {
                    color: white;
                    background-color: aqua;
                    transform: scale(1.2);
                }
            
                .back-button {
                    height: 30px;
                    background-color: rgb(66,69,73);
                    color: white;
                }
                
                .back-button:hover {
                    background-color: rgb(191,155,48);
                }
            </style>
            <a href="https://team-hub.netlify.app/create">
            <button class="submit-button back-button">Back</button>
            </a>
            <p>Passwords dont match</p>`
            )
    } else if (userDB) {
        res.send(
            `
            <style>
                .submit-button {
                    font-family: Roboto;
                    font-size: 20px;
                    background-color: rgb(255, 255, 255);
                    height: 50px;
                    width: 100px;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.15s;
                }
                
                .submit-button:hover {
                    color: white;
                    background-color: aqua;
                    transform: scale(1.2);
                }
            

                .back-button {
                    height: 30px;
                    background-color: rgb(66,69,73);
                    color: white;
                }
                
                .back-button:hover {
                    background-color: rgb(191,155,48);
                }
            </style>
            <a href="https://team-hub.netlify.app/create">
            <button class="submit-button back-button">Back</button>
            </a>
            <p>User already Exists</p>`
            )
    } else {
        const newUser = await USER.create({ username, email, password});
        console.log(newUser);
        req.session.user = newUser;
        req.session.save();
        res.send(200);
    }  
})


module.exports = router;
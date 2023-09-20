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
    //     res.send(`
    // <style>
    //     .submit-button {
    //         font-family: Roboto;
    //         font-size: 20px;
    //         background-color: rgb(255, 255, 255);
    //         height: 50px;
    //         width: 100px;
    //         border: none;
    //         border-radius: 10px;
    //         cursor: pointer;
    //         transition: all 0.15s;
    //     }
        
    //     .submit-button:hover {
    //         color: white;
    //         background-color: aqua;
    //         transform: scale(1.2);
    //     }
    

    //     .back-button {
    //         height: 30px;
    //         background-color: rgb(66,69,73);
    //         color: white;
    //     }
        
    //     .back-button:hover {
    //         background-color: rgb(191,155,48);
    //     }
    // </style>
    // <a href="https://team-hub.netlify.app/login">
    // <button class="submit-button back-button">Back</button>
    // </a>
    // <p>Enter valid details</p>
    //`)
    };
    const userDB = await USER.findOne({email});
    if (!userDB) {
        res.status(406)
        return res.json({"message": "Password is incorrect"})
    //     return res.send(`
    // <style>
    //     .submit-button {
    //         font-family: Roboto;
    //         font-size: 20px;
    //         background-color: rgb(255, 255, 255);
    //         height: 50px;
    //         width: 100px;
    //         border: none;
    //         border-radius: 10px;
    //         cursor: pointer;
    //         transition: all 0.15s;
    //     }
        
    //     .submit-button:hover {
    //         color: white;
    //         background-color: aqua;
    //         transform: scale(1.2);
    //     }
    

    //     .back-button {
    //         height: 30px;
    //         background-color: rgb(66,69,73);
    //         color: white;
    //     }
        
    //     .back-button:hover {
    //         background-color: rgb(191,155,48);
    //     }
    // </style>
    // <a href="https://team-hub.netlify.app/login">
    // <button class="submit-button back-button">Back</button>
    // </a>
    // <p>Password is incorrect</p>
    // `)
    };
    const isValid = comparePassword(password, userDB.password)
    if (!isValid) {
        res.status(406)
        return res.json({"message": "Password is incorrect"})
    //     res.send(`
    //     <style>
    //         .submit-button {
    //             font-family: Roboto;
    //             font-size: 20px;
    //             background-color: rgb(255, 255, 255);
    //             height: 50px;
    //             width: 100px;
    //             border: none;
    //             border-radius: 10px;
    //             cursor: pointer;
    //             transition: all 0.15s;
    //         }
            
    //         .submit-button:hover {
    //             color: white;
    //             background-color: aqua;
    //             transform: scale(1.2);
    //         }
        

    //         .back-button {
    //             height: 30px;
    //             background-color: rgb(66,69,73);
    //             color: white;
    //         }
            
    //         .back-button:hover {
    //             background-color: rgb(191,155,48);
    //         }
    //     </style>
    //     <a href="https://team-hub.netlify.app/login">
    //     <button class="submit-button back-button">Back</button>
    //     </a>
    //     <p>Password is incorrect</p>
    //     `)

    } else if (isValid) {
        req.session.user = userDB;
        req.session.save();
        console.log('Welcome Back!', userDB.username);
        return res.json({"message": "Welcome", "token": userDB.id});
    }
})

module.exports = router;

const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');
const nodemailer = require('nodemailer');
const MaskData = require('maskdata');



router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.use((_req, res, next) => {
    const maskPasswordOptions = {
        // Character to mask the data. default value is '*'
        maskWith : "*",
        // To limit the *s in response. Also useful in hiding the password length
        // Default max value is 16
        maxMaskedCharacters : 16
      };
    next();
});

router.get('/', async (req,res)=> {
    const userDB_id = req.query.id;
    const UserDB = await USER.findOne({_id: userDB_id});
    res.json(UserDB.email)
})

router.post('/', async (req,res) => {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lebang-teamhub@gmail.com',
            pass: "LebangTeam"
        }
    });


    transporter.verify(function(error, success) {
        if (error) {
              console.log(error);
        } else {
              console.log('Server is ready to take our messages');
        }
      });
    res.json({'message': `${transporter}`})
})


module.exports = router;



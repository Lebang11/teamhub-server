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

router.post('/notification', async (req,res) => {
    const message = req.body.message;
    const UserDBs = await USER.find({});

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'notifications.teamhub@gmail.com',
            pass: "tswz isdj nsbt bauq"
        }
    });

    transporter.verify(function(error, success) {
        if (error) {
              console.log(error);
        } else {
              console.log('Server is ready to take our messages');
        }
      });

    UserDBs.map(async (item) => {
        let mailDetails = {
            from: 'notifications.teamhub@gmail.com',
            to: item.email,
            subject: 'Sorry, please ignore',
            html:` <div><h3>${message}</h3></div>`
        };

        await transporter.sendMail(mailDetails, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(`Email successfully sent to ${mailDetails.to}`)
            }
        });
    });
    
    res.json({'message': `sent to everyone :)`})
})

router.post('/', async (req,res) => {
    const userDB_email = req.body.email;
    const UserDB = await USER.findOne({email: userDB_email});
    
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lebang.teamhub@gmail.com',
            pass: "hooa onbz wbii rwhz "
        }
    });

    let mailDetails = {
        from: 'lebang.teamhub@gmail.com',
        to: req.body.email,
        subject: 'Test mail',
        html:` <div><h3>Hi, reset password for Team-Hub here <a href="https://team-hub.netlify.app/reset/${UserDB._id}">Reset password</a></h3></div>`
    };

    transporter.sendMail(mailDetails, function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(`Email successfully sent to ${mailDetails.to}`)
        }
    })

    transporter.verify(function(error, success) {
        if (error) {
              console.log(error);
        } else {
              console.log('Server is ready to take our messages');
        }
      });
    res.json({'message': `${mailDetails}`})
})


module.exports = router;



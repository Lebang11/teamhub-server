const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');
const nodemailer = require('nodemailer');



router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.get('/', async (req,res)=> {
    const userDB_id = req.query.id;
    const UserDB = await USER.findOne({_id: userDB_id});
    res.json(UserDB.email)
})

router.post('/', async (req,res) => {
    let transporter = nodemailer.createTransport(transport[defaults])

    transporter.verify(function(error, success) {
        if (error) {
              console.log(error);
        } else {
              console.log('Server is ready to take our messages');
        }
      });
})


module.exports = router;



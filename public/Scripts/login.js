const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');

router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../login.html'))
})

module.exports = router;
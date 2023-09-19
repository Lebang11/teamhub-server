const Router = require('express');
const router = Router();
const { mongoose } = require('mongoose');
const path = require('path');
const session = require('express-session');



router.get('/', (req, res) => {
    if (!req.session.user) {
        res.sendFile(path.join(__dirname, '../main.html'));
    } else {
        res.send(req.session.user)
    }
     
})

module.exports = router;
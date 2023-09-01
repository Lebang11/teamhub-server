const Router = require('express');
const router = Router();
const { mongoose } = require('mongoose');
const path = require('path');
const session = require('express-session');



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
})

module.exports = router;
const Router = require('express');
const router = Router();

const { mongoose } = require('mongoose');
const path = require('path');
const session = require('express-session');

router.get('/', (req, res) => {
    res.send(`hi, ${req.session.user.username}`);
})

module.exports = router;
const Router = require('express');
const router = Router();
const { mongoose } = require('mongoose');
const path = require('path');
const session = require('express-session');

router.get('/', (req, res) => {
    res.send(`
    <h1>
        Welcome, ${req.session.user.username}!
    </h1>
    `)
})

module.exports = router;
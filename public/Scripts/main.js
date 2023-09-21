const Router = require('express');
const router = Router();
const { mongoose } = require('mongoose');
const path = require('path');
const session = require('express-session');



router.get('/', (req, res) => {
    if (req.session.user) {    
        res.json(req.session.user)
    } else {
        res.json({'message': 'No session initiated'})
    }

})

module.exports = router;
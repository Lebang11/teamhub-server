const express = require('express');
const router = express();
const PORT = 8080;
const path = require('path');
const mongoose = require('mongoose');






router.get('/', (req, res)=> {
    //res.sendFile(path.join(__dirname, '../../client/src/App.js'));
    //res.sendFile(path.join(__dirname, 'index.css'))
});

module.exports = router;

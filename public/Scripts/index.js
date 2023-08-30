const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const mongoose = require('mongoose');



app.use(express.static(path.join(__dirname,'css')));

app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'index.html'));
    //res.sendFile(path.join(__dirname, 'index.css'))
});

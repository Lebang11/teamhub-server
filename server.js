const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const createPage = require('./public/Scripts/create');
const confirmPage = require('./public/Scripts/confirmation');

require('./database');

app.use(express.static("public"))
app.use(express.urlencoded());
app.use('/create', createPage);
app.use('/confirm', confirmPage);


app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`));


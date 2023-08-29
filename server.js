const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const createPage = require('./public/Scripts/create')

app.use(express.static("public"))
app.use(express.urlencoded());
app.use('/create', createPage);


app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`));


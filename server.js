const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');


const PORT = 8080;
const path = require('path');
const createPage = require('./public/Scripts/create');
const confirmPage = require('./public/Scripts/confirmation');
const loginPage = require('./public/Scripts/login');


require('./database');

app.use(express.static("public"))
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
    session({
        secret: "ADASIJIOJSFIO",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: `mongodb+srv://lebang11:chocolate11@cluster0.3qpciie.mongodb.net/?retryWrites=true&w=majority`
        })
    })
);

app.use('/create', createPage);
app.use('/confirm', confirmPage);
app.use('/login', loginPage);


app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`));


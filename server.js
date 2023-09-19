const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const http = require('http');
const React = require('react');


const PORT = 3000;
const path = require('path');
const createPage = require('./public/Scripts/create');
const loginPage = require('./public/Scripts/login');
const mainPage = require('./public/Scripts/main.js');
const indexPage = require('./public/Scripts/index.js');


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

app.use(indexPage);
app.use('/api/create', createPage);
app.use('/api/login', loginPage);

app.use((req, res, next) => {
    if (req.session.user) next();
    else res.send(401);
})

app.use('/main', mainPage)


app.listen(PORT, '0.0.0.0', () => console.log(`Now listening at https://team-hub.onrender.com`));

//Testing :

// app.listen(PORT, () => console.log(`Now listening at http://localhost:3000`));


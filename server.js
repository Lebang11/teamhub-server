const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');

require('dotenv').config();


const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const createPage = require('./public/Scripts/create.js');
const loginPage = require('./public/Scripts/login.js');
const mainPage = require('./public/Scripts/main.js');
const indexPage = require('./public/Scripts/index.js');
const blogPage = require('./public/Scripts/blogs.js');
const problemsPage = require('./public/Scripts/problems.js');
const commentsPage = require('./public/Scripts/comments.js');
const userPage = require('./public/Scripts/user.js');
const emailPage = require('./public/Scripts/email.js');
const answersPage = require('./public/Scripts/answers.js');
const challengesPage = require('./public/Scripts/challenges.js');
const gamersPage = require('./public/Scripts/gaming.js');



app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
//app.use(cors);

require('./database/index.js');

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
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

app.get('/', (req, res) => {
    res.send("Welcome");
})

// app.use(indexPage);
app.use('/api/create', createPage);
app.use('/api/login', loginPage);
app.use('/api/main', mainPage);
app.use('/api/blogs', blogPage);
app.use('/api/problems', problemsPage);
app.use('/api/comments', commentsPage);
app.use('/api/user', userPage);
app.use('/api/email', emailPage);
app.use('/api/answers', answersPage);
app.use('/api/challenges', challengesPage);
app.use('/api/gamers', gamersPage);



const mainURL = "https://team-hub.onrender.com"
app.listen(PORT, () => console.log(`Now listening at ${mainURL}`));

module.exports = app;


const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Blogs = require('../../database/Schema/Blogs');
const User = require('../../database/Schema/User');


router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.get('/', async (req, res) => {
    const data = await Blogs.find({}).sort({'date':-1})
    res.send(data)
})

router.post('/', async (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.text;
    const authorDB = await User.find({username: author});
    const authorID = authorDB.id
    const date = new Date();


    const newBlog = await Blogs.create({author, title, description, date, authorID})
    console.log('Blog created by', author, ' with ID: ', authorID);
    res.status(201);
    res.json(newBlog);
})

module.exports = router;
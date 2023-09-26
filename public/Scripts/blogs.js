const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Blogs = require('../../database/Schema/Blogs');


router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.get('/', async (req, res) => {
    const data = await Blogs.find({})
    res.send(data)
})

router.post('/', async (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.text;


    const newBlog = await Blogs.create({author, title, description})
    console.log('Blog created by', author);
    res.status(201);
    res.json(newBlog);
})

module.exports = router;
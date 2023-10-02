const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const comments = require('../../database/Schema/Comments');


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
    const text = req.body.text;
    const date = new Date();

    const newComment = await comments.create({author, text, date})
    console.log('Comment created by', author);
    res.status(201);
    res.json(newComment);
})

module.exports = router;
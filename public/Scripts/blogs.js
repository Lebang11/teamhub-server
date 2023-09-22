const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Blogs = require('../../database/Schema/Blogs');
const cors = require('cors');

router.use(cors);

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
    const text = req.body.text;


    await Blogs.create({author, title, text})
    .then(user => {
        console.log('done');
        res.status(201);
        res.json(user);
    })
    .catch(err => console.log(err))
})

module.exports = router;
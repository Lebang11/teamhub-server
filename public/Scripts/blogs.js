const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Blogs = require('../../database/Schema/Blogs');

router.post('/', async (req, res) => {
    const newBlog = await Blogs.create({author, title, text})
    .then(user => {
        console.log('done');
        res.status(201);
    })
    .catch(err => console.log(err))
})

module.exports = router;
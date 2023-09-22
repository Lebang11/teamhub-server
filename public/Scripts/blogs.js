const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Blogs = require('../../database/Schema/Blogs');

router.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = router;
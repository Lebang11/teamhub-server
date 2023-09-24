const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Problems = require('../../database/Schema/problems');


router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.get('/', async (req, res) => {
    const data = await Problems.find({});
    res.send(data);
})

router.post('/', async (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.text;
    const language = req.body.language;
    const date = req.body.date;

    const newProblem = await Problems.create({author, title, description, language, date})
    console.log('Problem created by', author);
    res.status(201);
    res.json(newProblem);
})

module.exports = router;
const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const answers = require('../../database/Schema/Answers')


router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.get('/', async (req, res) => {
    const data = await answers.find({}).sort({'date':-1})
    res.send(data)
})

router.post('/', async (req, res) => {
    const author = req.body.author;
    const authorID = req.body.authorID;
    const text = req.body.text;
    const filename = req.body.filename;
    const problemID = req.body.problemID;

    const date = new Date();

    const newAnswer = await answers.create({authorID, author, text, problemID, date, filename})
    console.log('Answer created by', author);
    res.status(201);
    res.json(newAnswer);
})

module.exports = router;
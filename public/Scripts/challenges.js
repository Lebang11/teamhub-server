const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Challenges = require('../../database/Schema/Challenges');
const answers = require('../../database/Schema/Challenge-Answers')




router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

  router.get('/', async (req, res) => {
   const data = await Challenges.find({}).sort({'date':-1})
   res.send(data)
})

router.post('/', async (req, res) => {
    const author = req.body.author;
    const authorID = req.body.authorID;
    const title = req.body.title;
    const description = req.body.description;
    const language = req.body.language;
    const date = req.body.date;


    const newChallenge = await Challenges.create({author, authorID, title, description, language, date});
    console.log('Challenge created by', author);
    res.status(201);
    res.json(newChallenge);
})

router.get('/answers', async (req, res) => {
    const data = await answers.find({}).sort({'date':-1})
    res.send(data)
})

router.post('/answers', async (req, res) => {
    const challengeAuthorID = req.body.challengeAuthorID
    const author = req.body.author;
    const authorID = req.body.authorID;
    const text = req.body.text;
    const filename = req.body.filename;
    const challengeID = req.body.challengeID;

    const date = new Date();

    const newAnswer = await answers.create({challengeAuthorID, authorID, author, text, challengeID, date, filename})
    console.log('Answer created by', author);
    res.status(201);
    res.json(newAnswer);
})

module.exports = router;
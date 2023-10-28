const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Problems = require('../../database/Schema/problems');
const multer = require('multer');
const Path = require('path');
const problems = require('../../database/Schema/problems');


router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

  router.get('/', async (req, res) => {
   const data = await Problems.find({}).sort({'date':-1})
   res.send(data)
})

router.post('/', async (req, res) => {
    const author = req.body.author;
    const authorID = req.body.authorID;
    const title = req.body.title;
    const text = req.body.text;
    const language = req.body.language;
    const date = req.body.date;
    const filename = req.body.filename;
    const filedownload = req.body.fileDownload;
    const answered = false;
    const answerCount = 0;


    const newProblem = await Problems.create({author, authorID, title, text, language, date, filename, filedownload, answerCount, answered});
    console.log('Problem created by', author);
    res.status(201);
    res.json(newProblem);
});

router.post('/answered', async (req, res) => {
    const problemID = req.body.problemID;
    await Problems.updateOne(
        { _id: problemID}, 
        {$set: {"answered": true}}, 
        {upsert: true}
    )
    res.sendStatus(200)
})

module.exports = router;
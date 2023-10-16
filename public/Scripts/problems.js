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


    const newProblem = await Problems.create({author, authorID, title, text, language, date, filename, filedownload});
    console.log('Problem created by', author);
    res.status(201);
    res.json(newProblem);
})

module.exports = router;
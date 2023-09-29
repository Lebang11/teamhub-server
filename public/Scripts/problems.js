const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Problems = require('../../database/Schema/problems');
const multer = require('multer');
const Path = require('path');

const path = Path.resolve(__dirname, './var/data/1696016420591-prac.py')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './var/data')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: fileStorage})

router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.get('/', async (req, res) => {
    // const data = await Problems.find({});
    // res.send(data);
    res.download('./var/data/1696016420591-prac.py')
})

router.post('/', upload.single('file'), async (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.text;
    const language = req.body.language;
    const date = req.body.date;
    const filename = Date.now() + '-' + req.body.filename;

    const newProblem = await Problems.create({author, title, description, language, date, filename});
    console.log('Problem created by', author);
    res.status(201);
    res.json(newProblem);
})

module.exports = router;
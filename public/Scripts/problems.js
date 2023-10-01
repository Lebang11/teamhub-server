const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Problems = require('../../database/Schema/problems');
const multer = require('multer');
const Path = require('path');
const Grid = require('gridfs-stream');
Grid.mongo = mongo;
let gfs = Grid(connection.db);

// set up connection to db for file storage
const storage = require('multer-gridfs-storage')({
   db: connection.db,
   file: (req, file) => {
      return {
         filename: file.originalname
      }
   }
});

const upload = multer({ storage: storage})

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

router.post('/', upload.single('file'), (req, res) => {
    if (req.file) {
       return res.json({
          success: true,
          file: req.file
       });
    }
     res.send({ success: false });
 });

router.post('/', upload.single('file'), async (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.text;
    const language = req.body.language;
    const date = req.body.date;
    const filename = req.body.filename;
    const filedownload = req.body.fileDownload;

    const newProblem = await Problems.create({author, title, description, language, date, filename, filedownload});
    console.log('Problem created by', author);
    res.status(201);
    res.json(newProblem);
})

module.exports = router;
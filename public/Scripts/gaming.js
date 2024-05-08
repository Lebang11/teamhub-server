const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Gamers = require('../../database/Schema/Gamers')
const Problems = require('../../database/Schema/problems')


router.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });

router.get('/', async (req, res) => {
    const data = await Gamers.find({}).sort({'date':-1})
    res.send(data)
})

router.post('/', async (req, res) => {
    const name = req.body.name;
    const steamName = req.body.steamName;
    const psnName = req.body.psnName;
    const xboxName = req.body.xboxName;
    const epicName = req.body.epicName;
    const eaName = req.body.eaName;
    const games = req.body.games;

    const date = new Date();

    const newGamer = await Gamers.create({name, steamName, psnName, xboxName, epicName, eaName, games, date})
    console.log(`Gamer created (${name}) `);
    res.status(201);
    res.json(newGamer);
})

module.exports = router;
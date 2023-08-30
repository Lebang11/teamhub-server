const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const path = require('path');
const USER = require('../../database/Schema/User');





const users = [{
    name: "Lebang Nong",
    email: "lebangnong@gmail.com",
    preffered: "Lebang"
}];



router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../create.html'))
})

router.post('/', async (req,res) => {
    const { name, email, preffered} = req.body;
    const userDB = await USER.findOne({$or: [{email}]});
    if (!name || !email ) {
        res.send(400);
    } else if (userDB) {
        console.log('User already Exists')
    } else {
        const newUser = await USER.create({ name, email, preffered});
        console.log(newUser);
    }
    
})




module.exports = router;
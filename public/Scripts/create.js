const USER = require('express');
const user = USER();
const path = require('path');





users = [{
    name: "Lebang Nong",
    email: "lebangnong@gmail.com",
    preffered: "Lebang"
}];



user.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../create.html'))
})

user.post('/', (req,res) => {
    
    users.push(req.body)
    console.log(users)
})

console.log(users)

module.exports = user

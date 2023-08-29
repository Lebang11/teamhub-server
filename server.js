const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static("public"))
app.use(express.urlencoded());


app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`));

app.get('/create', (req,res)=> {
    res.sendFile(path.join(__dirname, 'public/create.html'))
})

app.post('/create', (req,res) => {
    console.log(req.body)
})
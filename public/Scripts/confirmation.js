const express = require('express');
const app = express();

app.post('/', (req, res)=>{
    res.send(`
    <p>Are you sure?</p>
    <button>
        <a href="/safespace.html">
            yes
        </a>
    </button>
    
    <button>
        <a href="/create">
            no
        </a>
    </button>
    `)
});

module.exports = app


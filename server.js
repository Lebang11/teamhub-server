const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static("public"))

app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}/`));


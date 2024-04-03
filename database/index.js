const mongoose = require('mongoose');


const MongoPassword = process.env.MongoPassword;

SESSION_SECRET = "1"
mongoose.connect(`mongodb+srv://lebang11:${MongoPassword}@cluster0.3qpciie.mongodb.net/?retryWrites=true&w=majority`).then(() => console.log('Connected to at DB'))
.catch((err) => console.log(err));


module.exports = mongoose;
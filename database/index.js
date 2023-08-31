const mongoose = require('mongoose');

SESSION_SECRET = "1"
mongoose.connect(`mongodb+srv://lebang11:chocolate11@cluster0.3qpciie.mongodb.net/?retryWrites=true&w=majority`).then(() => console.log('Connected to at DB'))
.catch((err) => console.log(err));

module.exports = mongoose;
const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.mongodbUri, (err, db) => {
    if (err)
        console.log(err)
    else
        console.log("successfully connected to mongo db");
});

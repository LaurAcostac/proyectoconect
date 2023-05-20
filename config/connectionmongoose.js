const mongoose = require('mongoose')
require('dotenv').config()

const uri =`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.idychtf.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true });

module.exports= mongoose

const mongoose = require('mongoose')

const uri ='mongodb+srv://SaraADSO:vyErcjpB0LcSXSqV@cluster0.qaszepu.mongodb.net/Mascotas?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true });

module.exports= mongoose
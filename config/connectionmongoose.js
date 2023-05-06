const mongoose = require('mongoose')

const uri ='mongodb+srv://LauraAdso:ZGi3b7V9f1CNADek@cluster0.idychtf.mongodb.net/Mascotas?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true });

module.exports= mongoose

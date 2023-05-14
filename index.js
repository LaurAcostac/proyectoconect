const express = require('express')
const path = require('path');
const app = express()
const Mascota = require('./models/mascota')
const router = require('router')
const routercito = require('./routes/enrutamiento');

const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.PORT //Revisa el puerto o la variable de entorno asociada al proceso de node en el sistema operativo




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})
app.listen(PORT, () => {
    console.log('estoy en línea en el puerto: ' + PORT)
}
)

app.use('/api/v1/', routercito)


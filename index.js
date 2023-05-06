
const express = require('express')
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 9300 //Revisa el puerto o la variable de entorno asociada al proceso de node en el sistema operativo
const path = require('path');
const app = express()
const mascota = require('./models/mascota')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/mascotas', async(req, res)=> {
    let listaMascotas = await mascota.find({});
    console.log(listaMascotas)
    res.render('mascotas.ejs', {
        "nombre": listaMascotas
    })
})

app.post('/mascotas', async(req, res)=> {
    const nombremascota = req.body.Name;
    const mascotica = new mascota({
        Name: nombremascota
    })
    await mascotica.save()
    res.send(`La mascota ${mascotica} se creó con éxito!!`)
})


app.listen(PORT, () => {
    console.log('estoy en línea en el puerto: ' + PORT)
}
)



const express = require('express')

const PORT = process.env.PORT || 9300 //Revisa el puerto o la variable de entorno asociada al proceso de node en el sistema operativo
const path = require('path');
const app = express()
const mascota = require('./models/mascota')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/saludar', (req, res) => {
    let nombre = 'Laura';
    let materias = ['node', 'matematicas', 'requisitos']
    res.render('index', {
        "name": nombre,
        "listaMaterias": materias
    })
})

app.get('/mascotas', async(req, res)=> {
    let listaMascotas = await mascota.findOne();
    res.send(listaMascotas);
})


app.listen(PORT, () => {
    console.log('estoy en línea en el puerto: ' + PORT)
}
)


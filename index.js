const express = require('express')

const PORT = process.env.PORT || 9200 //Revisa el puerto o la variable de entorno asociada al proceso de node en el sistema operativo
const path = require('path');
const app = express()
const mascota = require('./models/mascota')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

app.post('/mascotas', async(req, res)=> { //Se define el método.
    const nombremascota = req.body.Name;
    const razamascota = req.body.Raza;
    const idmascotica = req.body.Id //Se crea una constante que almacene el nombre que se puso en el input con el name: Name.
    const mascotica = new mascota({ //Se define la constante que almacena el modelo establecido en models. En caso de necesitar mas valores se agregan aquí.
        Name: nombremascota,
        raza: razamascota,
        id: idmascotica//Clave valor
    })
    await mascotica.save() //la mascotica será guardada
    res.send(`La mascota ${mascotica} se registró con éxito!!`) //Mensaje al guardar correctamente
})

app.put('/actualizarmascota/:id')


app.listen(PORT, () => {
    console.log('estoy en línea en el puerto: ' + PORT)
}
)


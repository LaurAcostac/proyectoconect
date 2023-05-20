
const mascota = require('../models/mascota')

exports.mascotas = async(req, res)=> {
    let listaMascotas = await mascota.find({});
    console.log(listaMascotas)
    res.render('mascotas.ejs', {
        "listadoMascotas": listaMascotas
    })
};

exports.nuevamascota =async(req, res)=> { //Se define el método.
//Se crea una constante que almacene el nombre que se puso en el input con el name: Name.
    const mascotica = new mascota({ //Se define la constante que almacena el modelo establecido en models. En caso de necesitar mas valores se agregan aquí.
        Name: req.body.campoNombre,
        raza: req.body.campoRaza,
        id: req.body.campoId //Clave valor
    })
    await mascotica.save() //la mascotica será guardada
    res.redirect('mascotas') //Mensaje al guardar correctamente
}

exports.editarMascotas = async (req, res)=> {
    const idedit = {id: req.body.Idact}
    const update = {Name: req.body.Nameact,
                    raza: req.body.Razaact}
    await mascota.findOneAndUpdate(idedit, update)
    res.redirect('/api/v1/mascotas')
}



exports.borrarmascota = async (req, res) => {
    let id = req.params.id
    //await mascota.findByIdAndDelete ({"_id": id})
    await mascota.findOneAndDelete({"id":id})
    res.redirect('/api/v1/mascotas')
}
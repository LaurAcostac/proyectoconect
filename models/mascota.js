const mongoose = require('../config/connectionmongoose');

const SchemaMascota = new mongoose.Schema({
    nombre: String
});

const Mascota = mongoose.model('Mascota', SchemaMascota)

module.exports= Mascota

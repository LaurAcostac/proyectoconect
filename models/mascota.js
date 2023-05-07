const mongoose = require('../config/connectionmongoose');

const SchemaMascota = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
    Name: {
        type: String,
        required: true,
        default: "Sin nombre"
    },
    raza: {
        type: String,
        required: true
    }

});

const Mascota = mongoose.model('Mascota', SchemaMascota)

module.exports = Mascota

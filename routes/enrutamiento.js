const routermascotitas = require('../controller/mascotas')
const express = require('express')
const router = express.Router('')

router.get('/mascotas', routermascotitas.mascotas)
router.post('/newmascota', routermascotitas.nuevamascota)

module.exports= router 
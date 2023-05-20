const routermascotitas = require('../controller/mascotas')
const express = require('express')
const router = express.Router()

router.get('/mascotas', routermascotitas.mascotas)
router.post('/newmascot', routermascotitas.nuevamascota)
router.get('/eliminar/:id', routermascotitas.borrarmascota)
router.post('/ola', routermascotitas.editarMascotas)

module.exports= router 
const express = require('express');
const router = express.Router();
const competenciaController = require('../controller/competenciaController.js');

//ruta para obtener una competencia por su id
router.get('/competencia',  competenciaController.obtenerPorId);

module.exports = router;



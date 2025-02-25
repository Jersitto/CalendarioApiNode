const express = require('express');
const router = express.Router();
const competenciaController = require('../controller/competenciaController.js');

//ruta para obtener una competencia por su id
router.get('/competencia',  competenciaController.obtenerPorId);
//ruta para obtener todas las competencias
router.get('/competencias', competenciaController.obtenerTodos);
//ruta para obtener una competencia por su nombre
router.get('/competencia/nombre', competenciaController.obtenerPorNombre);
//ruta para insertar una competencia
router.post('/competencia', competenciaController.insertarCompetencia);
//ruta para actualizar una competencia
router.put('/competencia', competenciaController.actualizarCompetencia);
//ruta para eliminar una competencia
router.delete('/competencia', competenciaController.eliminarCompetencia);

//exportar las rutas
module.exports = router;



const TematicaController = require('../controller/tematicaController');
const express = require('express');
const router = express.Router();

//ruta para obtener todas las tematicas
router.get('/tematicas', TematicaController.obtenerTodos);
//ruta para obtener una tematica por id
router.get('/tematica/:id', TematicaController.obtenerPorId);
//ruta para insertar una tematica
router.post('/tematica', TematicaController.insertarTematica);
//ruta para actualizar una tematica
router.put('/tematica/:id', TematicaController.actualizarTematica);
//ruta para eliminar una tematica
router.delete('/tematica/:id', TematicaController.eliminarTematica);

module.exports = router;

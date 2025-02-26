const express = require('express');
const router = express.Router();
const ConocimientosController = require('../controller/conocimientosController.js');

// Rutas para obtener un conocimiento por su id
router.get('/conocimiento', ConocimientosController.obtenerPorId);
// Rutas para obtener todos los conocimientos
router.get('/conocimientos', ConocimientosController.obtenerTodos);
// Rutas para obtener un conocimiento por su nombre
router.get('/conocimiento/nombre', ConocimientosController.obtenerPorNombre);
// Rutas para insertar un conocimiento
router.post('/conocimiento', ConocimientosController.insertarConocimiento);
// Rutas para actualizar un conocimiento
router.put('/conocimiento', ConocimientosController.actualizarConocimiento);
// Rutas para eliminar un conocimiento
router.delete('/conocimiento', ConocimientosController.eliminarConocimiento);

module.exports = router;

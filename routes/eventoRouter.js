const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventoController.js');

//ruta para obtener un evento por su id
router.get('/evento', eventoController.obtenerPorId);
//ruta para obtener todos los eventos
router.get('/eventos', eventoController.obtenerTodos);
//ruta para obtener un evento por su nombre
router.get('/evento/nombre', eventoController.obtenerPorNombre);
// Ruta para obtener eventos por aprendiz_id
router.get('/eventos/aprendiz/:aprendizId', eventoController.obtenerEventosPorAprendiz);
//ruta para insertar un evento
router.post('/evento', eventoController.insertarEvento);
//ruta para actualizar un evento
router.put('/evento', eventoController.actualizarEvento);
//ruta para eliminar un evento
router.delete('/evento', eventoController.eliminarEvento);

//exportar las rutas
module.exports = router;
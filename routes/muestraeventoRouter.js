const express = require('express');
const router = express.Router();
const MuestaEventoController = require('../controller/muestraeventoController.js');

//ruta para obtener un aprendiz por su id
router.get('/muestraevento', MuestaEventoController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/mostrareventos', MuestaEventoController.obtenerTodos);
//ruta para obtener un archivo por su nombre
router.get('/muestraevento/eventoide', MuestaEventoController.obtenerPorEventoIde);
//ruta para insertar un archivo
router.post('/muestraevento', MuestaEventoController.insertarMuestraEvento);
//ruta para actualizar un archivo
router.put('/muestraevento', MuestaEventoController.actualizarMuestraEvento);
//ruta para eliminar un archivo
router.delete('/muestraevento', MuestaEventoController.eliminarMuestraEvento);

//exportar las rutas
module.exports = router;
const express = require('express');
const router = express.Router();
const CalendarioEventoController = require('../controller/calendarioeventoController.js');

//ruta para obtener un aprendiz por su id
router.get('/calendarioevento', CalendarioEventoController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/calendarioeventos', CalendarioEventoController.obtenerTodos);
//ruta para obtener un archivo por su nombre
router.get('/calendarioevento/evento', CalendarioEventoController.obtenerPorEventoIde);
//ruta para insertar un calendarioevento
router.post('/calendarioevento', CalendarioEventoController.insertarCalendarioEvento);
//ruta para actualizar un calendarioevento
router.put('/calendarioevento', CalendarioEventoController.actualizarCalendarioEvento);
//ruta para eliminar un calendarioevento
router.delete('/calendarioevento', CalendarioEventoController.eliminarCalendarioEvento);

//exportar las rutas
module.exports = router;
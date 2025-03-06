const express = require('express');
const router = express.Router();
const RecordatorioController = require('../controller/recordatorioController.js');

//ruta para obtener un aprendiz por su id
router.get('/recordatorio', RecordatorioController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/recordatorios', RecordatorioController.obtenerTodos);
//ruta para obtener un archivo por su nombre
router.get('/recordatorio/fecha', RecordatorioController.obtenerPorFechaRecordatorio);
//ruta para insertar un recordatorio
router.post('/recordatorio', RecordatorioController.insertarRecordatorio);
//ruta para actualizar un recordatorio
router.put('/recordatorio', RecordatorioController.actualizarRecordatorio);
//ruta para eliminar un recordatorio
router.delete('/recordatorio', RecordatorioController.eliminarRecordatorio);

//exportar las rutas
module.exports = router;
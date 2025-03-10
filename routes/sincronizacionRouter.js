const SincronizacionController = require('../controller/sincronizacionController');
const express = require('express');
const router = express.Router();

//ruta para obtener todas las sincronizaciones
router.get('/sincronizaciones', SincronizacionController.obtenerSincronizaciones);
//ruta para obtener una sincronizacion por id
router.get('/sincronizacion/:id', SincronizacionController.obtenerPorId);
//ruta para obtener una sincronizacion por dispositivo
router.get('/sincronizacion/dispositivo/:dispositivo', SincronizacionController.obtenerPorDispositivo);
//ruta para obtener una sincronizacion por evento
router.get('/sincronizacion/evento/:evento', SincronizacionController.obtenerPorEvento);
//ruta para insertar una sincronizacion
router.post('/sincronizacion', SincronizacionController.insertarSincronizacion);
//ruta para actualizar una sincronizacion
router.put('/sincronizacion/:id', SincronizacionController.actualizarSincronizacion);
//ruta para eliminar una sincronizacion
router.delete('/sincronizacion/:id', SincronizacionController.eliminarSincronizacion);

module.exports = router;
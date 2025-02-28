const express = require('express');
const router = express.Router();
const NotificacionController = require('../controller/notificacionController.js');

//ruta para obtener un aprendiz por su id
router.get('/notificacion', NotificacionController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/notificaciones', NotificacionController.obtenerTodos);
//ruta para obtener un archivo por su nombre
router.get('/notificacion/mensaje', NotificacionController.obtenerPorMensaje);
//ruta para insertar un archivo
router.post('/notificacion', NotificacionController.insertarNotificacion);
//ruta para actualizar un notifiacion
router.put('/notificacion', NotificacionController.actualizarNotificacion);
//ruta para eliminar un notifiacion
router.delete('/notificacion', NotificacionController.eliminarNotificacion);

//exportar las rutas
module.exports = router;
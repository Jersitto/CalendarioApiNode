const express = require('express');
const router = express.Router();
const NotificacionDeAsistenciaController = require('../controller/notificaciondeasistenciaController.js');

//ruta para obtener un aprendiz por su id
router.get('/notificaciondeasistencia', NotificacionDeAsistenciaController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/notificacionesdeasistencia', NotificacionDeAsistenciaController.obtenerTodos);
//ruta para obtener un archivo por su nombre
router.get('/notificaciondeasistencia/mensaje', NotificacionDeAsistenciaController.obtenerPorMensaje);
//ruta para insertar un notificaciondeasistencia
router.post('/notificaciondeasistencia', NotificacionDeAsistenciaController.insertarNotificacionDeAsistencia);
//ruta para actualizar un notificaciondeasistencia
router.put('/notificaciondeasistencia', NotificacionDeAsistenciaController.actualizarNotificacionDeAsistencia);
//ruta para eliminar un notificaciondeasistencia
router.delete('/notificaciondeasistencia', NotificacionDeAsistenciaController.eliminarNotificacionDeAsistencia);

//exportar las rutas
module.exports = router;
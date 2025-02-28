const express = require('express');
const router = express.Router();
const ArchivoController = require('../controller/archivoController.js');

//ruta para obtener un aprendiz por su id
router.get('/archivo', ArchivoController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/archivos', ArchivoController.obtenerTodos);
//ruta para obtener un archivo por su nombre
router.get('/archivo/nombre', ArchivoController.obtenerPorNombre);
//ruta para insertar un archivo
router.post('/archivo', ArchivoController.insertarArchivo);
//ruta para actualizar un archivo
router.put('/archivo', ArchivoController.actualizarArchivo);
//ruta para eliminar un archivo
router.delete('/archivo', ArchivoController.eliminarArchivo);

//exportar las rutas
module.exports = router;
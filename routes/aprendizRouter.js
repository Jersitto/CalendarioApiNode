const express = require('express');
const router = express.Router();
const aprendizController = require('../controller/aprendizController.js');

//ruta para obtener un aprendiz por su id
router.get('/aprendiz', aprendizController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/aprendices', aprendizController.obtenerTodos);
//ruta para obtener un aprendiz por su nombre
router.get('/aprendiz/nombre', aprendizController.obtenerPorNombre);
//ruta para insertar un aprendiz
router.post('/aprendiz', aprendizController.insertarAprendiz);
//ruta para actualizar un aprendiz
router.put('/aprendiz', aprendizController.actualizarAprendiz);
//ruta para eliminar un aprendiz
router.delete('/aprendiz', aprendizController.eliminarAprendiz);

//exportar las rutas
module.exports = router;
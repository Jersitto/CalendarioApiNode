const express = require('express');
const router = express.Router();
const saberesController = require('../controller/saberesController.js');  // Asegúrate de que la extensión .js esté incluida

//ruta para obtener un saberes por su id
router.get('/saber', saberesController.obtenerPorId);
//ruta para obtener todos los saberes
router.get('/saberes', saberesController.obtenerTodos);
//ruta para obtener un saberes por su nombre
router.get('/saber/nombre', saberesController.obtenerPorNombre);
//ruta para insertar un saberes
router.post('/saber', saberesController.insertarSaberes);
//ruta para actualizar un saberes
router.put('/saber', saberesController.actualizarSaberes);
//ruta para eliminar un saberes
router.delete('/saber', saberesController.eliminarSaberes);

module.exports = router;
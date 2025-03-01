const express = require('express');
const router = express.Router();
const faseController = require('../controller/faseController.js');

//ruta para obtener un aprendiz por su id
router.get('/fase', faseController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/fases', faseController.obtenerTodos);
//ruta para obtener un archivo por su nombre
router.get('/fase/fases', faseController.obtenerPorFase);
//ruta para insertar un archivo
router.post('/fase', faseController.insertarFase);
//ruta para actualizar un archivo
router.put('/fase', faseController.actualizarFase);
//ruta para eliminar un archivo
router.delete('/fase', faseController.eliminarFase);

//exportar las rutas
module.exports = router;
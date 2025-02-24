const express = require('express');
const router = express.Router();
const fichaController = require('../controller/fichaController.js');

//ruta para obtener una ficha por su id
router.get('/ficha', fichaController.obtenerPorId);
//ruta para obtener todas las fichas
router.get('/fichas', fichaController.obtenerTodos);
//ruta para obtener una ficha por su numero de ficha
router.get('/ficha/numFicha', fichaController.obtenerPorNumero);
//ruta para insertar una ficha
router.post('/ficha', fichaController.insertarFicha);
//ruta para actualizar una ficha
router.put('/ficha', fichaController.actualizarFicha);
//ruta para eliminar una ficha
router.delete('/ficha', fichaController.eliminarFicha);



//exportar las rutas
module.exports = router;
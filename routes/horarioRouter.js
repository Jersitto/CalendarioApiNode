const express = require('express');
const router = express.Router();
const horarioController = require('../controller/horarioController.js');

//ruta para obtener un horario por su id
router.get('/horario', horarioController.obtenerPorId);
//ruta para obtener todas los horarios
router.get('/horarios', horarioController.obtenerTodos);
//ruta para obtener un horario por idFicha
router.get('/horario/idFicha', horarioController.obtenerPorIdFicha);
//ruta para insertar un horario
router.post('/horario', horarioController.insertarHorario);
//ruta para actualizar un horario
router.put('/horario', horarioController.actualizarHorario);
//ruta para eliminar un horario
router.delete('/horario', horarioController.eliminarHorario);

module.exports = router;
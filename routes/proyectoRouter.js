const express = require('express');
const router = express.Router();
const ProyectoController = require('../controller/proyectoController');

//Ruta para obtener un proyecto por su id
router.get('/proyecto', ProyectoController.obtenerPorId);
//Ruta para obtener todos los proyectos
router.get('/proyectos', ProyectoController.obtenerTodos);
//Ruta para obtener un proyecto por su codigo
router.get('/proyecto/codigo', ProyectoController.obtenerPorCodigo);
//Ruta para insertar un proyecto
router.post('/proyecto', ProyectoController.insertarProyecto);
//Ruta para actualizar un proyecto
router.put('/proyecto', ProyectoController.actualizarProyecto);
//Ruta para eliminar un proyecto
router.delete('/proyecto', ProyectoController.eliminarProyecto);


module.exports = router;
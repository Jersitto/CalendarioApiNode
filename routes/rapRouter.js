const express = require('express');
const router = express.Router();
const RapController = require('../controller/rapController.js');

//Ruta para obtener un proyecto por su id
router.get('/rap', RapController.obtenerPorId);
//Ruta para obtener todos los proyectos
router.get('/raps', RapController.obtenerTodos);
//Ruta para obtener un rap por su codigo
router.get('/rap/proyecto', RapController.obtenerPorProyecto);
//Ruta para insertar un proyecto
router.post('/rap', RapController.insertarRap);
//Ruta para actualizar un rap
router.put('/rap', RapController.actualizarRap);
//Ruta para eliminar un rap
router.delete('/rap', RapController.eliminarRap);


module.exports = router;
const express = require('express');
const router = express.Router();
const cursoController = require('../controller/cursoController.js');

//ruta para obtener un curso por su id
router.get('/curso',  cursoController.obtenerPorId);
//ruta para obtener todas los cursos
router.get('/cursos', cursoController.obtenerTodos);
//ruta para obtener un curso por su nombre
router.get('/curso/nombre', cursoController.obtenerPorNombre);
//ruta para obtener un curso por aprendiz_id
router.get('/curso/aprendiz', cursoController.obtenerPorAprendizId);
//ruta para insertar un curso
router.post('/curso', cursoController.insertarCurso);
//ruta para actualizar un curso
router.put('/curso', cursoController.actualizarCurso);
//ruta para eliminar un curso
router.delete('/curso', cursoController.eliminarCurso);

//exportar las rutas
module.exports = router;

const express = require('express');
const router = express.Router();
const comentarioController = require('../controller/comentarioController.js');

//ruta para obtener un aprendiz por su id
router.get('/comentario', comentarioController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/comentarios', comentarioController.obtenerTodos);
//ruta para obtener un archivo por su nombre
router.get('/comentario/contenido', comentarioController.obtenerPorContenido);
//ruta para insertar un archivo
router.post('/comentario', comentarioController.insertarComentario);
//ruta para actualizar un archivo
router.put('/comentario', comentarioController.actualizarComentario);
//ruta para eliminar un archivo
router.delete('/comentario', comentarioController.eliminarComentario);

//exportar las rutas
module.exports = router;
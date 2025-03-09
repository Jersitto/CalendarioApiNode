const SistemaAnaliticaController = require('../controller/sistemaAnaliticaController');
const express = require('express');
const router = express.Router();

//ruta para obtener por id
router.get('/analitica/:id', SistemaAnaliticaController.obtenerPorId);
//ruta para obtener todas las analiticas
router.get('/analiticas', SistemaAnaliticaController.obtenerAnaliticas);
//ruta para obtener una analitica por metrica
router.get('/analitica/:metrica', SistemaAnaliticaController.obtenerPorMetrica);
//ruta para obtener una analitica por aprendiz_id
router.get('/analitica/aprendiz/:aprendiz_id', SistemaAnaliticaController.obtenerPorAprendiz);
//ruta para insertar una analitica
router.post('/analitica', SistemaAnaliticaController.insertarAnalitica);
//ruta para actualizar una analitica
router.put('/analitica/:id', SistemaAnaliticaController.actualizarAnalitica);
//ruta para eliminar una analitica
router.delete('/analitica/:id', SistemaAnaliticaController.eliminarAnalitica);

module.exports = router;
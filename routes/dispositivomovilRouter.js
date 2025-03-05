const express = require('express');
const router = express.Router();
const DispositivoMovilController = require('../controller/dispositivomovilController');

//ruta para obtener un aprendiz por su id
router.get('/dispositivomovil', DispositivoMovilController.obtenerPorId);
//ruta para obtener todos los aprendices
router.get('/dispositivosmoviles', DispositivoMovilController.obtenerTodos);
//ruta para obtener un archivo por su nombre
router.get('/dispositivomovil/nombre', DispositivoMovilController.obtenerPorNombre);
//ruta para insertar un dispositivomovil
router.post('/dispositivomovil', DispositivoMovilController.insertarDispositivoMovil);
//ruta para actualizar un dispositivomovil
router.put('/dispositivomovil', DispositivoMovilController.actualizarDispositivoMovil);
//ruta para eliminar un dispositivomovil
router.delete('/dispositivomovil', DispositivoMovilController.eliminarDispositivoMovil);

//exportar las rutas
module.exports = router;
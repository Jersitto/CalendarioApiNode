const dispositivomovilModel = require('../model/dispositivomovilModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class DispositivoMovilController {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        dispositivomovilModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener el Dispositivo Movil' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        dispositivomovilModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener los Dispositivos Moviles' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorNombre(req, res) {
        //obtener el nombre del archivo
        const { nombre } = req.query;
        console.log('Buscando nombre:', nombre); // Log para debug
        //validar que el nombre no sea nulo
        if (!nombre) {
            res.status(400).json({ error: 'El campo nombre es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        dispositivomovilModel.obtenerPorNombre(nombre, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener el aprendiz' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarDispositivoMovil(req, res) {
        const { nombre, tipo, aprendiz_id} = req.body;
        
        if (!nombre || !tipo || !aprendiz_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (nombre, tipo, aprendiz_id)'
            });
            return;
        }

       const dispositivomovil ={
        nombre,
        tipo,
        aprendiz_id
       };
console.log(dispositivomovil)
        dispositivomovilModel.insertarDispositivoMovil(dispositivomovil, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar el Dispositivo Movil' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarDispositivoMovil(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;

        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const {nombre, tipo, aprendiz_id } = req.body;
        //validar los datos del body
        if (!tipo || !nombre || !aprendiz_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (nombre, tipo, aprendiz_id)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const dispositivomovil = {
           nombre,
           tipo,
           aprendiz_id
        };
        //validar que el objeto aprendiz no sea nulo
        if (!dispositivomovil) {
            res.status(400).json({ error: 'El campo dispositivomovil es requerido' });
            return;
        }

        //llamar el metodo del modelo
        dispositivomovilModel.actualizarDispositivoMovil(id, dispositivomovil, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar el Dispositivo movil' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarDispositivoMovil(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        dispositivomovilModel.eliminarDispositivoMovil(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar el dispositivo movil' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = DispositivoMovilController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



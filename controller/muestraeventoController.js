const MuestraEventoModel = require('../model/muestraeventoModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class MuestaEventoController {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId(req, res) {
        //obtener el id del aprendiz
        const { vista_id } = req.query;
        //validar que el id no sea nulo
        if (!vista_id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        MuestraEventoModel.obtenerPorId(vista_id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener la Muestra del Evento' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        MuestraEventoModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener las muestras de los eventos' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorEventoIde(req, res) {
        //obtener el nombre del archivo
        const { evento_id } = req.query;
        console.log('Buscando Muestra:', evento_id); // Log para debug
        //validar que el nombre no sea nulo
        if (!evento_id) {
            res.status(400).json({ error: 'El campo evento_id es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        MuestraEventoModel.obtenerPorEventoIde(evento_id, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener el ide del evento' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarMuestraEvento(req, res) {
        const { evento_id} = req.body;
        
        if ( !evento_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (evento_id)'
            });
            return;
        }

       const muestraevento ={
        evento_id
       };
       
console.log(muestraevento)

        MuestraEventoModel.insertarMuestraEvento(muestraevento, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar la muestra del evento'});
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarMuestraEvento(req, res) {
        //obtener el id del aprendiz
        const { vista_id } = req.query;

        //validar que el id no sea nulo
        if (!vista_id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const {evento_id } = req.body;
        //validar los datos del body
        if (!evento_id) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (evento_id)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const muestraevento ={
            evento_id
           };
        //validar que el objeto aprendiz no sea nulo
        if (!muestraevento) {
            res.status(400).json({ error: 'El campo muestraevento es requerido' });
            return;
        }

        //llamar el metodo del modelo
        MuestraEventoModel.actualizarMuestraEvento(vista_id, muestraevento, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar la muestra del evento' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarMuestraEvento(req, res) {
        //obtener el id del aprendiz
        const { vista_id } = req.query;
        //validar que el id no sea nulo
        if (!vista_id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        MuestraEventoModel.eliminarMuestraEvento(vista_id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar la muestra del evento' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = MuestaEventoController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



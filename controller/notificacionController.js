const notificacionModel = require('../model/notificacionModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class NotificacionController {
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
        notificacionModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener la notificacion ' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        notificacionModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener las notificaciones' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorMensaje(req, res) {
        //obtener el nombre del archivo
        const { mensaje } = req.query;
        console.log('Buscando mensaje:', mensaje); // Log para debug
        //validar que el nombre no sea nulo
        if (!mensaje) {
            res.status(400).json({ error: 'El campo mensaje es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        notificacionModel.obtenerPorMensaje(mensaje, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener la notificacion' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarNotificacion(req, res) {
        const { mensaje, fechaEnvio, evento_id, aprendiz_id} = req.body;
        
        if (!mensaje || !fechaEnvio || !evento_id || !aprendiz_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (mensaje, fechaEnvio, evento_id, aprendiz_id)'
            });
            return;
        }

       const notificacion ={
        mensaje, 
        fechaEnvio, 
        evento_id, 
        aprendiz_id
       };
console.log(notificacion)
       notificacionModel.insertarNotificacion(notificacion, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar la notificacion' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarNotificacion(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;

        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const { mensaje, fechaEnvio, evento_id, aprendiz_id} = req.body;
        //validar los datos del body
        if (!mensaje || !fechaEnvio || !evento_id || !aprendiz_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (mensaje, fechaEnvio, evento_id, aprendiz_id)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const notificacion ={
            mensaje, 
            fechaEnvio, 
            evento_id, 
            aprendiz_id
           };
        //validar que el objeto aprendiz no sea nulo
        if (!notificacion) {
            res.status(400).json({ error: 'El campo archivo es requerido' });
            return;
        }

        //llamar el metodo del modelo
        notificacionModel.actualizarNotificacion(id, notificacion, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar la notificaion' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarNotificacion(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        notificacionModel.eliminarNotificacion(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar la notificacion' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = NotificacionController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



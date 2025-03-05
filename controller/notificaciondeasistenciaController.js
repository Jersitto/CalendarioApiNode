const e = require('cors');
const notificaciondeasistenciaModel = require('../model/notificaciondeasistenciaModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class NotificacionDeAsistenciaController  {
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
        notificaciondeasistenciaModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener la Notificacion de Asistencia' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        notificaciondeasistenciaModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener las Notificaciones de Asistencia' });
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
        notificaciondeasistenciaModel.obtenerPorMensaje(mensaje, (err, response) => {
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
    static insertarNotificacionDeAsistencia(req, res) {
        const { mensaje, fechaEnvio, evento_id} = req.body;
        
        if (!mensaje || !fechaEnvio || !evento_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (mensaje, fechaEnvio, evento_id)'
            });
            return;
        }

       const notificaciondeasistencia ={
        mensaje,
        fechaEnvio,
        evento_id
       };

        console.log(notificaciondeasistencia)

        notificaciondeasistenciaModel.insertarNotificacionDeAsistencia(notificaciondeasistencia, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar la notificacion de asistencia' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarNotificacionDeAsistencia(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;

        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const {mensaje, fechaEnvio, evento_id } = req.body;
        //validar los datos del body
        if (!mensaje || !fechaEnvio || !evento_id) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (mensaje, fechaEnvio, evento_id)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const notificaciondeasistencia = {
           mensaje,
           fechaEnvio,
           evento_id
        };
        //validar que el objeto aprendiz no sea nulo
        if (!notificaciondeasistencia) {
            res.status(400).json({ error: 'El campo notificaiondeasistencia es requerido' });
            return;
        }

        //llamar el metodo del modelo
        notificaciondeasistenciaModel.actualizarNotificacionDeAsistencia(id, notificaciondeasistencia, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar la notificacion de asistencia' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarNotificacionDeAsistencia(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        notificaciondeasistenciaModel.eliminarNotificacionDeAsistencia(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar la notificacion de asistencia' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = NotificacionDeAsistenciaController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



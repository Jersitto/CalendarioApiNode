const CalendarioEventoModel = require('../model/calendarioeventoModel');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class CalendarioEventoController {
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
        CalendarioEventoModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener el CalendarioEvento' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        CalendarioEventoModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener los CalendariosEventos' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorEventoIde(req, res) {
        //obtener el nombre del archivo
        const { evento_id } = req.query;
        console.log('Buscando ide del Evento:', evento_id); // Log para debug
        //validar que el nombre no sea nulo
        if (!evento_id) {
            res.status(400).json({ error: 'El campo evento_id es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        CalendarioEventoModel.obtenerPorEventoIde(evento_id, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener el evento_id' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarCalendarioEvento(req, res) {
        const {evento_id} = req.body;
        
        if (!evento_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (evento:id)'
            });
            return;
        }

       const calendarioevento ={
        evento_id
       };

         console.log(calendarioevento)

        CalendarioEventoModel.insertarCalendarioEvento(calendarioevento, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar el calendarioEvento' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarCalendarioEvento(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;

        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const {evento_id } = req.body;
        //validar los datos del body
        if (!evento_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (evento:id)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const calendarioevento = {
           evento_id
        };
        //validar que el objeto aprendiz no sea nulo
        if (!calendarioevento) {
            res.status(400).json({ error: 'El campo calendarioevento es requerido' });
            return;
        }

        //llamar el metodo del modelo
        CalendarioEventoModel.actualizarCalendarioEvento(id, calendarioevento, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar el calendarioEvento' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarCalendarioEvento(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        CalendarioEventoModel.eliminarCalendarioEvento(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar el CalendarioEvento' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = CalendarioEventoController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



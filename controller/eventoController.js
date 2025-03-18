const eventoModel = require('../model/eventoModel');
const { response } = require('express');

//crear la clase para el controlador del evento
class EventoController {
    //metodo para obtener un evento por su id
    static obtenerPorId(req, res) {
        //obtener el id del evento
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        eventoModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener el evento' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los eventos
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        eventoModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener los eventos' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un evento por su nombre
    static obtenerPorNombre(req, res){
        //obtener el nombre del evento
        const { nombre } = req.query;
        console.log('Buscando nombre:', nombre); // Log para debug
        //validar que el nombre no sea nulo
        if (!nombre) {
            res.status(400).json({ error: 'El campo nombre es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        eventoModel.obtenerPorNombre(nombre, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener el evento' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    // Método para obtener eventos por aprendiz_id
static obtenerEventosPorAprendiz(req, res) {
    const aprendizId = req.params.aprendizId;
    
    // Validar que el ID sea un número
    if (!aprendizId || isNaN(parseInt(aprendizId))) {
        res.status(400).json({ error: 'ID de aprendiz inválido' });
        return;
    }
    
    eventoModel.obtenerEventosPorAprendiz(aprendizId, (err, eventos) => {
        if (err) {
            console.error("Error al obtener eventos por aprendiz:", err);
            res.status(500).json({ error: 'Error al obtener eventos' });
            return;
        }
        res.json(eventos);
    });
}

    //metodo para insertar un evento
    static insertarEvento(req, res) {
        //obtener datos del body
        const { nombre, fecha, hora, aprendiz_id, usuario_modificador_id, usuario_eliminador_id, usuario_creador_id, eliminado } = req.body;
        //validar que los campos requeridos no sean nulos (excluyendo usuario_eliminador_id de la validación)
        if (!nombre || !fecha || !hora || !aprendiz_id || !usuario_modificador_id || !usuario_creador_id || eliminado === undefined) {
            res.status(400).json({ error: 'Los campos nombre, fecha, hora, aprendiz_id, usuario_modificador_id, usuario_creador_id y eliminado son requeridos' });
            return;
        }
        //crear el objeto evento
        const evento = {
            nombre,
            fecha,
            hora,
            aprendiz_id,
            usuario_modificador_id,
            usuario_eliminador_id, // Este puede ser null
            usuario_creador_id,
            eliminado
        };
        //llamar el metodo del modelo
        eventoModel.insertarEvento(evento, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar el evento' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un evento
    static actualizarEvento(req, res) {
        //obtener el id del evento de los query params
        const { id } = req.query;
        //obtener datos del body
        const { nombre, fecha, hora, aprendiz_id, usuario_modificador_id, usuario_creador_id, eliminado } = req.body;
        
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido en los parámetros de consulta' });
            return;
        }

        //crear el objeto evento con los campos que vienen
        const evento = {};
        if (nombre) evento.nombre = nombre;
        if (fecha) evento.fecha = fecha;
        if (hora) evento.hora = hora;
        if (aprendiz_id) evento.aprendiz_id = aprendiz_id;
        if (usuario_modificador_id) evento.usuario_modificador_id = usuario_modificador_id;
        if (usuario_creador_id) evento.usuario_creador_id = usuario_creador_id;
        if (eliminado !== undefined) evento.eliminado = eliminado;
        evento.usuario_eliminador_id = null; // Siempre establecer como null en actualización

        //validar que haya al menos un campo para actualizar
        if (Object.keys(evento).length === 0) {
            res.status(400).json({ error: 'Debe proporcionar al menos un campo para actualizar' });
            return;
        }

        //llamar el metodo del modelo
        eventoModel.actualizarEvento(id, evento, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar el evento' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para eliminar un evento
    static eliminarEvento(req, res) {
        //obtener el id del evento
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        eventoModel.eliminarEvento(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar el evento' });
                return;
            }
            res.json(response);
        });
    }
}

// Exportar el controlador
module.exports = EventoController;
const conocimientosModel = require('../model/conocimientosModel.js');
const { response } = require('express');

class ConocimientosController {
    // Método para obtener un conocimiento por su id
    static obtenerPorId(req, res) {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ error: 'El campo id es requerido' });
        }

        conocimientosModel.obtenerPorId(id, (err, response) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ error: 'No se pudo obtener los conocimientos' });
            }
            res.json(response);
        });
    }

    // Método para obtener todos los conocimientos
    static obtenerTodos(req, res) {
        conocimientosModel.obtenerTodos((err, response) => {
            if (err) {
                return res.status(500).json({ error: 'No se pudieron obtener los conocimientos' });
            }
            res.json(response);
        });
    }

    // Método para obtener un conocimiento por su nombre
    static obtenerPorNombre(req, res) {
        const { nombre } = req.query;
        if (!nombre) {
            return res.status(400).json({ error: 'El campo nombre es requerido' });
        }

        conocimientosModel.obtenerPorNombre(nombre, (err, response) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ error: 'No se pudo obtener los conocimientos' });
            }
            res.json(response);
        });
    }

    // Método para insertar un conocimiento
    static insertarConocimiento(req, res) {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío o mal formado' });
        }

        const { conocimiento, codCompetencia, idCompetencia } = req.body;
        if (!conocimiento || !codCompetencia || !idCompetencia) {
            return res.status(400).json({ error: 'Todos los campos (idConocimiento, conocimiento, codCompetencia, idCompetencia) son requeridos' });
        }

        const conocimientos = { conocimiento, codCompetencia, idCompetencia };

        conocimientosModel.insertarConocimiento(conocimientos, (err, response) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ error: 'No se pudo insertar el conocimiento' });
            }
            res.json(response);
        });
    }

    // Método para actualizar un conocimiento
    static actualizarConocimiento(req, res) {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ error: 'El id es requerido' });
        }

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío o mal formado' });
        }

        const {conocimiento, codCompetencia, idCompetencia } = req.body;
        if (!conocimiento || !codCompetencia || !idCompetencia) {
            return res.status(400).json({ error: 'Todos los campos (conocimiento, codCompetencia, idCompetencia) son requeridos' });
        }

        const conocimientos = { conocimiento, codCompetencia, idCompetencia};

        conocimientosModel.actualizarConocimiento(id, conocimientos, (err, response) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ error: 'No se pudo actualizar el conocimiento' });
            }
            res.json(response);
        });
    }

    // Método para eliminar un conocimiento
    static eliminarConocimiento(req, res) {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ error: 'El campo id es requerido' });
        }

        conocimientosModel.eliminarConocimiento(id, (err, response) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ error: 'No se pudo eliminar el conocimiento' });
            }
            res.json(response);
        });
    }
}

module.exports = ConocimientosController;

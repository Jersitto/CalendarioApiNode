const SincronizacionModel = require('../model/sincronizacionModel');

class SincronizacionController {
    //metodo para obtener todas las sincronizaciones
    static obtenerSincronizaciones(req, res) {
        SincronizacionModel.obtenerSincronizaciones((err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para obtener una sincronizacion por id
    static obtenerPorId(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'El campo id es requerido' });
        }
        SincronizacionModel.obtenerPorId(id, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para obtener una sincronizacion por dispositivo
    static obtenerPorDispositivo(req, res) {
        const { dispositivo } = req.params;
        if (!dispositivo) {
            return res.status(400).json({ error: 'El campo dispositivo es requerido' });
        }
        SincronizacionModel.obtenerPorDispositivo(dispositivo, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para obtener una sincronizacion por evento
    static obtenerPorEvento(req, res) {
        const { evento } = req.params;
        if (!evento) {
            return res.status(400).json({ error: 'El campo evento es requerido' });
        }
        SincronizacionModel.obtenerPorEvento(evento, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para insertar una sincronizacion
    static insertarSincronizacion(req, res) {
        const { dispositivo_id, evento_id  } = req.body;
        if (!dispositivo_id || !evento_id ) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }
        const sincronizacion = {
            dispositivo_id,
            evento_id
        }
        SincronizacionModel.insertarSincronizacion(sincronizacion, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para actualizar una sincronizacion
    static actualizarSincronizacion(req, res) {
        const { id } = req.params;
        const { dispositivo_id, evento_id,  } = req.body;
        if (!dispositivo_id || !evento_id ) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }
        const sincronizacion = {
            dispositivo_id,
            evento_id,
        }
        SincronizacionModel.actualizarSincronizacion(id, sincronizacion, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }   

    //metodo para eliminar una sincronizacion
    static eliminarSincronizacion(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'El campo id es requerido' });
        }
        SincronizacionModel.eliminarSincronizacion(id, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }
}

module.exports = SincronizacionController;
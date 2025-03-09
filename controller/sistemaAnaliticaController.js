const SistemaAnaliticaModel = require('../model/sistemaAnaliticaModel');

//crea la clase para el controlador de tematica
class SistemaAnaliticaController {
    //metodo para obtener todas las analiticas
    static obtenerAnaliticas(req, res) {
        SistemaAnaliticaModel.obtenerAnaliticas((err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para obtener una analitica por metricas
    static obtenerPorMetrica(req, res) {
        const { metrica } = req.params;
        if (!metrica) {
            return res.status(400).json({ error: 'El campo metrica es requerido' });
        }
        SistemaAnaliticaModel.obtenerPorMetrica(metrica, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para obtener una analitica por aprendiz_id
    static obtenerPorAprendiz(req, res) {
        const { aprendiz_id } = req.params;
        if (!aprendiz_id) {
            return res.status(400).json({ error: 'El campo aprendiz_id es requerido' });
        }
        SistemaAnaliticaModel.obtenerPorAprendiz(aprendiz_id, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para insertar una analitica
    static insertarAnalitica(req, res) {
        const { metrica, datos, aprendiz_id } = req.body;
        if (!metrica || !datos || !aprendiz_id) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }
        const analitica = {
            metrica,
            datos,
            aprendiz_id
        }
        SistemaAnaliticaModel.insertarAnalitica(analitica, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para actualizar una analitica
    static actualizarAnalitica(req, res) {
        const { id } = req.params;
        const { metrica, datos, aprendiz_id } = req.body;
        if (!metrica || !datos || !aprendiz_id) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }
        const analitica = {
            metrica,
            datos,
            aprendiz_id
        }
        SistemaAnaliticaModel.actualizarAnalitica(analitica, id, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para eliminar una analitica
    static eliminarAnalitica(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'El campo id es requerido' });
        }
        SistemaAnaliticaModel.eliminarAnalitica(id, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

    //metodo para obtner por id
    static obtenerPorId(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'El campo id es requerido' });
        }
        SistemaAnaliticaModel.obtenerPorId(id, (err, response) => {
            if (err) {
                return res.json(err);
            }
            res.json(response);
        });
    }

}

module.exports = SistemaAnaliticaController;
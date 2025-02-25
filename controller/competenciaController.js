const CompetenciaModel = require('./model/competenciaModel.js');
const { response } = require('express');

//crear la clase para el controlador de competencia

class CompetenciaController {
    //metodo para obtener una competencia por su id
    static obtenerPorId(req, res) {
        //obtener el id de la competencia
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        CompetenciaModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener la competencia' });
                return;
            }
            res.json(response);
        });
    }
}

module.exports = CompetenciaController;
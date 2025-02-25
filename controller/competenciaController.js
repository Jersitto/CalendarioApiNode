const competenciaModel = require('../model/competenciaModel.js');
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
        competenciaModel.obtenerPorId(id, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener la competencia' });
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para obtener todas las competencias
    static obtenerTodos(req,res) {
        //llamar el metodo del modelo
        competenciaModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener las competencias' });
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }
    
    //metodo para obtener una competencia por su nombre
    static obtenerPorNombre(req, res){
        //obtener el nombre de la competencia
        const { nombre } = req.query;
        console.log('Buscando nombre:', nombre); // Log para debug
        //validar que el nombre no sea nulo
        if (!nombre) {
            res.status(400).json({ error: 'El campo nombre es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        competenciaModel.obtenerPorNombre(nombre, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener el evento' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });

    }

    //metodo para insertar una competencia
    static insertarCompetencia(req, res){
        const { competencias, nombreCompetencia} = req.body;
        
        if (!competencias ||!nombreCompetencia) {	
            res.status(400).json({
                error: 'Todos los campos son requeridos (competencias, nombreCompetencia)'
            });
            return;
        }
        //crear el objeto competencia
        const competencia = {
            competencias,
            nombreCompetencia
        };
        //llamar el metodo del modelo
        competenciaModel.insertarCompetencia(competencia, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo insertar la competencia' });
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });

    }
    //metodo para actualizar una competencia
    static actualizarCompetencia(req, res){
        const { id } = req.query;
        const { competencias, nombreCompetencia} = req.body;
        //validar que el id y los datos no sean nulos
        if (!id ||!competencias ||!nombreCompetencia) {    
            res.status(400).json({
                error: 'El id y los campos competencias y nombreCompetencia son requeridos'
            });
            return;
        }
        //crear el objeto competencia
        const competencia = {
            competencias,
            nombreCompetencia
        };
        //llamar el metodo del modelo
        competenciaModel.actualizarCompetencia(id, competencia, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo actualizar la competencia' });
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });

    }
    //metodo para eliminar una competencia
    static eliminarCompetencia(req, res) {
        //obtener el id de la competencia
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        competenciaModel.eliminarCompetencia(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar la competencia' });
                return;
            }
            res.json(response);
        });
    }

}
module.exports = CompetenciaController;

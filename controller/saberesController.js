const SaberesModel = require('../model/saberesModel');
const { response } = require('express');

class SaberesController{
    //metodo para obtener un saberes por su id
    static obtenerPorId(req, res){
        //obtener el id del saberes
        const { id } = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        //llamar el metodo del modelo
        SaberesModel.obtenerPorId(id, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo obtener el saberes'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para obtener todos los saberes
    static obtenerTodos(req, res){
        //llamar el metodo del modelo
        SaberesModel.obtenerTodos((err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudieron obtener los saberes'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para obtener un saberes por su nombre
    static obtenerPorNombre(req, res){
        //obtener el nombre del saberes
        const { nombre } = req.query;
        console.log('Buscando nombre:', nombre); // Log para debug
        //validar que el nombre no sea nulo
        if(!nombre){
            res.status(400).json({error: 'El campo nombre es requerido'});
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        SaberesModel.obtenerPorNombre(nombre, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo obtener el saberes'});
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un saberes
    static insertarSaberes(req, res){
        //obtener los datos del saberes
        const { saber, codCompetencia, idCompetencia } = req.body;
        //validar que los campos no sean nulos
        if(!saber || !codCompetencia || !idCompetencia){
            res.status(400).json({error: 'Los campos saber, codCompetencia e idCompetencia son requeridos'});
            return;
        }
        //crear el objeto con los datos del saberes
        const saberes = {
            saber,
            codCompetencia,
            idCompetencia
        };
        //llamar el metodo del modelo
        SaberesModel.insertarSaberes(saberes, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo insertar el saberes'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para actualizar un saberes
    static actualizarSaberes(req, res){
        const { id } = req.query;
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return
        }
        //obtener los datos del saberes
        const {  saber, codCompetencia, idCompetencia } = req.body;
        //validar que los campos no sean nulos
        if( !saber || !codCompetencia || !idCompetencia){
            res.status(400).json({error: 'Los campos  saber, codCompetencia e idCompetencia son requeridos'});
            return;
        }
        //crear el objeto con los datos del saberes
        const saberes = {
            saber,
            codCompetencia,
            idCompetencia
        };
        //llamar el metodo del modelo
        SaberesModel.actualizarSaberes(id, saberes, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo actualizar el saberes'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para eliminar un saberes
    static eliminarSaberes(req, res){
        //obtener el id del saberes
        const { id } = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        //llamar el metodo del modelo
        SaberesModel.eliminarSaberes(id, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo eliminar el saberes'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

}

// Exportar el controlador
module.exports = SaberesController;
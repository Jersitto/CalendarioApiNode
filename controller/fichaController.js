const fichaModel = require('../model/fichaModel.js'); // Corregir la ruta de 'models' a 'model'
const {response} = require('express');

class FichaController {
    //metodo para obtener una ficha por su id
    static obtenerPorId(req, res){
        //obtener el id de la ficha
        const {id} = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        //llamar el metodo del modelo
        fichaModel.obtenerPorId(id, (err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudo obtener la ficha'});
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todas las fichas
    static obtenerTodos(req, res){
        //llamar el metodo del modelo
        fichaModel.obtenerTodos((err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudieron obtener las fichas'});
                return;
            }
            res.json(response);
        });
    }
    
    //metodo para obtener una ficha por su numero de ficha
    static obtenerPorNumero(req, res){
        //obtener el numero de ficha
        const {numFicha} = req.query;
        console.log('Buscando numero de ficha:', numFicha); // Log para debug
        //validar que el numero de ficha no sea nulo
        if(!numFicha){
            res.status(400).json({error: 'El campo numero de ficha es requerido'});
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        fichaModel.obtenerPorNumero(numFicha, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo obtener la ficha'});
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar una ficha
    static insertarFicha(req, res){
        //obtener los datos de la ficha
        const { fechaInicio, fechafin, numFicha, fechaInicioPracticas, fechaFinpracticas} = req.body;
        //validar que los campos no sean nulos
        if(!fechaInicio || !fechafin || !numFicha || !fechaInicioPracticas || !fechaFinpracticas){
            res.status(400).json({error: 'Los campos son requeridos'});
            return;
        }
        const ficha ={
            fechaInicio,
            fechafin,
            numFicha,
            fechaInicioPracticas,
            fechaFinpracticas
        }
        //llamar el metodo del modelo
        fichaModel.insertarFicha(ficha, (err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudo insertar la ficha'});
                return;
            }
            res.json(response);
        })
    }
    //metodo para actualizar una ficha
    static actualizarFicha(req, res){
        //obtener el id de la ficha
        const {id} = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        //obtener los datos de la ficha
        const { fechaInicio, fechafin, numFicha, fechaInicioPracticas, fechaFinpracticas} = req.body;
        //validar que los campos no sean nulos
        if(!fechaInicio || !fechafin || !numFicha || !fechaInicioPracticas || !fechaFinpracticas){
            res.status(400).json({error: 'Los campos son requeridos'});
            return;
        }
        const ficha ={
            fechaInicio,
            fechafin,
            numFicha,
            fechaInicioPracticas,
            fechaFinpracticas
        }
        //llamar el metodo del modelo
        fichaModel.actualizarFicha(id, ficha, (err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudo actualizar la ficha'});
                console.log(err);
                return;
            }
            res.json(response);
        })
    }
    //metodo para eliminar una ficha
    static eliminarFicha(req, res){
        //obtener el id de la ficha
        const {id} = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        //llamar el metodo del modelo
        fichaModel.eliminarFicha(id, (err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudo eliminar la ficha'});
                return;
            }
            res.json(response);
        })
    }
}

module.exports = FichaController;
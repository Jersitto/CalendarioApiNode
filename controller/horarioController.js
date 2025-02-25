const HorarioModel = require('../model/horarioModel');
const {response} = require('express');

class HorarioController {
    //metodo para obtener un horario por su id
    static obtenerPorId(req, res){
        //obtener el id del horario
        const {id} = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        //llamar el metodo del modelo
        HorarioModel.obtenerPorId(id, (err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudo obtener el horario'});
                return;
            }
            res.json(response);
        });
    }
    //metodo para obtener todas los horarios
    static obtenerTodos(req, res){
        //llamar el metodo del modelo
        HorarioModel.obtenerTodos((err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudieron obtener los horarios'});
                return;
            }
            res.json(response);
        });
    }
    //metodo para obtener un horario por idFicha
    static obtenerPorIdFicha(req, res){
        //obtener el idFicha del horario
        const {idFicha} = req.query;
        //validar que el idFicha no sea nulo
        if(!idFicha){
            res.status(400).json({error: 'El campo idFicha es requerido'});
            return;
        }
        //llamar el metodo del modelo
        HorarioModel.obtenerPorIdFicha(idFicha, (err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudo obtener el horario'});
                return;
            }
            res.json(response);
        });
    }

    //metodo para insertar un horario
    static insertarHorario(req, res){
        const { fecha, hora, idFicha} = req.body;
        //validar que los campos no sean nulos
        if( !fecha || !hora || !idFicha){
            res.status(400).json({error: 'Todos los campos son requeridos'});
            return;
        }
        const horario = { fecha, hora, idFicha};
        //llamar el metodo del modelo
        HorarioModel.insertarHorario(horario, (err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudo insertar el horario'});
                return;
            }
            res.json(response);
        });
    }
    //metodo para actualizar un horario
    static actualizarHorario(req, res){
        //obtener el id del horario
        const {id} = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        const {fecha, hora, idFicha} = req.body;
        //validar que los campos no sean nulos
        if(!fecha || !hora || !idFicha){
            res.status(400).json({error: 'Todos los campos son requeridos'});
            return;
        }
        const horario = {id, fecha, hora, idFicha};
        //llamar el metodo del modelo
        HorarioModel.actualizarHorario(horario, (err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudo actualizar el horario'});
                return;
            }
            res.json(response);
        });
    }
    //metodo para eliminar un horario
    static eliminarHorario(req, res){
        //obtener el id del horario
        const {id} = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        //llamar el metodo del modelo
        HorarioModel.eliminarHorario(id, (err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudo eliminar el horario'});
                return;
            }
            res.json(response);
        });
    }
}

module.exports = HorarioController;
const ProyectoModel = require('../model/proyectoModel');
const {response} = require('express');

class ProyectoController {
    //metodo para obtener un proyecto por su id
    static obtenerPorId(req, res){
        const {id}=req.query;
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        ProyectoModel.obtenerPorId(id, (err, response)=>{
            if(err){
                res.status(500).json({error: 'No se pudo obtener el proyecto'});
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los proyectos
    static obtenerTodos(req, res){
        ProyectoModel.obtenerTodos((err, response)=>{
            if(err){
                res.status(500).json({error: 'No se pudieron obtener los proyectos'});
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un proyecto por codigo
    static obtenerPorCodigo(req, res){
        const {codigo}=req.query;
        if(!codigo){
            res.status(400).json({error: 'El campo codigo es requerido'});
            return;
        }
        ProyectoModel.obtenerPorCodigo(codigo, (err, response)=>{
            if(err){
                res.status(500).json({error: 'No se pudo obtener el proyecto'});
                return;
            }
            res.json(response);
        });
    }

    //metodo para insertar un proyecto
    static insertarProyecto(req, res){
        const {codigo, actividad, codigoFase }=req.body;
        if(!codigo || !actividad || !codigoFase){
            res.status(400).json({error: 'Todos los campos son requeridos'});
            return;
        }
        const proyecto = { codigo, actividad, codigoFase };
        ProyectoModel.insertarProyecto(proyecto, (err, response)=>{
            if(err){
                res.status(500).json({error: 'No se pudo insertar el proyecto'});
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un proyecto
    static actualizarProyecto(req, res){
        const {id}=req.query;
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        const {codigo, actividad, codigoFase }=req.body;
        if(!codigo || !actividad || !codigoFase){
            res.status(400).json({error: 'Todos los campos son requeridos'});
            return;
        }
        const proyecto = { codigo, actividad, codigoFase };
        console.log('Datos recibidos para actualizar:', proyecto, 'ID:', id); // Log de depuración
        ProyectoModel.actualizarProyecto(proyecto, id, (err, response)=>{
            if(err){
                console.error('Error al actualizar el proyecto:', err); // Log de depuración
                res.status(500).json({error: 'No se pudo actualizar el proyecto'});
                return;
            }
            res.json(response);
        });
    }

    //metodo para eliminar un proyecto
    static eliminarProyecto(req, res){
        const {id}=req.query;
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        console.log('ID recibido para eliminar:', id); // Log de depuración
        ProyectoModel.eliminarProyecto(id, (err, response)=>{
            if(err){
                console.error('Error al eliminar el proyecto:', err); // Log de depuración
                res.status(500).json({error: 'No se pudo eliminar el proyecto'});
                return;
            }
            res.json(response);
        });
    }

}

module.exports = ProyectoController;
const cursoModel = require('../model/cursoModel');
const { response } = require('express');

class CursoController{
    //metodo para obtener un curso por su id
    static obtenerPorId(req, res){
        //obtener el id del curso
        const { id } = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        //llamar el metodo del modelo
        cursoModel.obtenerPorId(id, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo obtener el curso'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para obtener todos los cursos
    static obtenerTodos(req, res){
        //llamar el metodo del modelo
        cursoModel.obtenerTodos((err, response) => {
            if(err){
                res.status(500).json({error: 'No se pudieron obtener los cursos'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para obtener un curso por su nombre
    static obtenerPorNombre(req, res){
        //obtener el nombre del curso
        const { nombre } = req.query;
        console.log('Buscando nombre:', nombre); // Log para debug
        //validar que el nombre no sea nulo
        if(!nombre){
            res.status(400).json({error: 'El campo nombre es requerido'});
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        cursoModel.obtenerPorNombre(nombre, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo obtener el curso'});
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para obtener un curso por aprendiz_id
    static obtenerPorAprendizId(req, res){
        //obtener el id del aprendiz
        const { aprendiz_id } = req.query;
        //validar que el id no sea nulo
        if(!aprendiz_id){
            res.status(400).json({error: 'El campo aprendiz_id es requerido'});
            return;
        }
        //llamar el metodo del modelo
        cursoModel.obtenerPorAprendizId(aprendiz_id, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo obtener el curso'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un curso
    static insertarCurso(req, res){
        const { nombre, aprendiz_id } = req.body;
        //validar que los campos no sean nulos
        if(!nombre || !aprendiz_id){
            res.status(400).json({error: 'Todos los campos son requeridos (nombre, aprendiz_id)'});
            return;
        }
        //crear el objeto con los datos del curso
        const curso = {
            nombre,
            aprendiz_id
        };
        //llamar el metodo del modelo
        cursoModel.insertarCurso(curso, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo insertar el curso'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para actualizar un curso
    static actualizarCurso(req, res){
        const { id } = req.query;
        const { nombre, aprendiz_id } = req.body;
        //validar que los campos no sean nulos
        if(!id || !nombre || !aprendiz_id){
            res.status(400).json({error: 'El id y los campos nombre y aprendiz_id son requeridos'});
            return;
        }
        //crear el objeto con los datos del curso
        const curso = {
            nombre,
            aprendiz_id
        };
        //llamar el metodo del modelo
        cursoModel.actualizarCurso(id, curso, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo actualizar el curso'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para eliminar un curso
    static eliminarCurso(req, res){
        const { id } = req.query;
        //validar que el id no sea nulo
        if(!id){
            res.status(400).json({error: 'El campo id es requerido'});
            return;
        }
        //llamar el metodo del modelo
        cursoModel.eliminarCurso(id, (err, response) => {
            if(err){
                console.error('Error:', err); // Log para debug
                res.status(500).json({error: 'No se pudo eliminar el curso'});
                return;
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }
}

module.exports = CursoController;
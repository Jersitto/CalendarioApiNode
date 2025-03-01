const comentarioModel = require('../model/comentarioModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class ComentarioController {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        comentarioModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener el comentario' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        comentarioModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener los comentarios' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorContenido(req, res) {
        //obtener el nombre del archivo
        const { contenido } = req.query;
        console.log('Buscando contenido:', contenido); // Log para debug
        //validar que el nombre no sea nulo
        if (!contenido) {
            res.status(400).json({ error: 'El campo contenido es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        comentarioModel.obtenerPorContenido(contenido, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener el contenido' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarComentario(req, res) {
        const { contenido, fecha, evento_id, aprendiz_id} = req.body;
        
        if (!contenido || !fecha || !evento_id || !aprendiz_id) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (contenido, fecha, evento_id, aprendiz_id)'
            });
            return;
        }

       const comentario ={
        contenido,
        fecha,
        aprendiz_id,
        evento_id
       };
console.log(comentario)
        comentarioModel.insertarComentario(comentario, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar el comentario' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarComentario(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;

        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const {contenido, fecha, evento_id, aprendiz_id } = req.body;
        //validar los datos del body
        if (!contenido || !fecha || !evento_id || !aprendiz_id) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (contenido, fecha, evento_id, aprendiz_id)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const comentario ={
            contenido,
            fecha,
            aprendiz_id,
            evento_id
           };
        //validar que el objeto aprendiz no sea nulo
        if (!comentario) {
            res.status(400).json({ error: 'El campo comentario es requerido' });
            return;
        }

        //llamar el metodo del modelo
        comentarioModel.actualizarComentario(id, comentario, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar el comentario' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarComentario(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        comentarioModel.eliminarComentario(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar el Comentario' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = ComentarioController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



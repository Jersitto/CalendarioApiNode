const aprendizModel = require('../model/aprendizModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class AprendizController {
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
        aprendizModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'Failed to retrieve apprentice' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        aprendizModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'Failed to retrieve apprentices' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorNombre(req, res) {
        //obtener el nombre del aprendiz
        const { nombre } = req.query;
        console.log('Buscando nombre:', nombre); // Log para debug
        //validar que el nombre no sea nulo
        if (!nombre) {
            res.status(400).json({ error: 'El campo nombre es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        aprendizModel.obtenerPorNombre(nombre, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'Failed to retrieve apprentice' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarAprendiz(req, res) {
        const { documento, nombre, programa, regional, centro, rh } = req.body;
        
        if (!documento || !nombre || !programa || !regional || !centro || !rh) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (documento, nombre, programa, regional, centro, rh)'
            });
            return;
        }

        const aprendiz = {
            documento,
            nombre,
            programa,
            regional,
            centro,
            rh
        };

        aprendizModel.insertarAprendiz(aprendiz, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron encontrar aprendices' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarAprendiz(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;

        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const { documento, nombre, programa, regional, centro, rh } = req.body;
        //validar los datos del body
        if (!documento || !nombre || !programa || !regional || !centro || !rh) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (documento, nombre, programa, regional, centro, rh)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const aprendiz = {
            documento,
            nombre,
            programa,
            regional,
            centro,
            rh
        }
        //validar que el objeto aprendiz no sea nulo
        if (!aprendiz) {
            res.status(400).json({ error: 'El campo aprendiz es requerido' });
            return;
        }

        //llamar el metodo del modelo
        aprendizModel.actualizarAprendiz(id, aprendiz, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'Failed to update apprentice' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarAprendiz(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        aprendizModel.eliminarAprendiz(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'Failed to delete apprentice' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = AprendizController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



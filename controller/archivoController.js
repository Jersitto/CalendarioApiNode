const archivoModel = require('../model/archivoModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class ArchivoController {
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
        archivoModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener el archivo' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        archivoModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener los archivos' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorNombre(req, res) {
        //obtener el nombre del archivo
        const { nombre } = req.query;
        console.log('Buscando nombre:', nombre); // Log para debug
        //validar que el nombre no sea nulo
        if (!nombre) {
            res.status(400).json({ error: 'El campo nombre es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        archivoModel.obtenerPorNombre(nombre, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener el aprendiz' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarArchivo(req, res) {
        const { nombre, tipo, evento_id} = req.body;
        
        if (!nombre || !tipo || !evento_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (nombre, tipo, evento:id)'
            });
            return;
        }

       const archivo ={
        nombre,
        tipo,
        evento_id
       };
console.log(archivo)
        archivoModel.insertarArchivo(archivo, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar el archivo' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarArchivo(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;

        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const {nombre, tipo, evento_id } = req.body;
        //validar los datos del body
        if (!tipo || !nombre || !evento_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (nombre, tipo, evento:id)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const archivo = {
           nombre,
           tipo,
           evento_id
        };
        //validar que el objeto aprendiz no sea nulo
        if (!archivo) {
            res.status(400).json({ error: 'El campo archivo es requerido' });
            return;
        }

        //llamar el metodo del modelo
        archivoModel.actualizarArchivo(id, archivo, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar el archivo' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarArchivo(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        archivoModel.eliminarArchivo(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar el archivo' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = ArchivoController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



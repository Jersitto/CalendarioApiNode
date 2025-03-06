const recordatorioModel = require('../model/recordatorioModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class RecordatorioController {
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
        recordatorioModel.obtenerPorId(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener el Recordatorio' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        recordatorioModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener los recordatorios' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorFechaRecordatorio(req, res) {
        //obtener el nombre del archivo
        const { fechaRecordatorio } = req.query;
        console.log('Buscando Recordatorio:', fechaRecordatorio); // Log para debug
        //validar que el nombre no sea nulo
        if (!fechaRecordatorio) {
            res.status(400).json({ error: 'El campo nombre es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        recordatorioModel.obtenerPorFechaRecordatorio(fechaRecordatorio, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener el Recordatorio' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarRecordatorio(req, res) {
        const { fechaRecordatorio, evento_id, aprendiz_id} = req.body;
        
        if (!fechaRecordatorio ||  !evento_id ||!aprendiz_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (fechaRecordatorio, aprendiz_id, evento:id)'
            });
            return;
        }

       const recordatorio ={
        fechaRecordatorio,
        evento_id,
        aprendiz_id
       };

console.log(recordatorio)

        recordatorioModel.insertarRecordatorio(recordatorio, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar el Recordatorio' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarRecordatorio(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;

        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const { fechaRecordatorio, evento_id, aprendiz_id} = req.body;
        //validar los datos del body
        if (!fechaRecordatorio ||  !evento_id ||!aprendiz_id ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (fechaRecordatorio, aprendiz_id, evento:id'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const recordatorio ={
            fechaRecordatorio,
            evento_id,
            aprendiz_id
        };
        //validar que el objeto aprendiz no sea nulo
        if (!recordatorio) {
            res.status(400).json({ error: 'El campo recordatorio es requerido' });
            return;
        }

        //llamar el metodo del modelo
        recordatorioModel.actualizarRecordatorio(id, recordatorio, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar el Recordatorio' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarRecordatorio(req, res) {
        //obtener el id del aprendiz
        const { id } = req.query;
        //validar que el id no sea nulo
        if (!id) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        recordatorioModel.eliminarRecordatorio(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar el Recordatorio' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = RecordatorioController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



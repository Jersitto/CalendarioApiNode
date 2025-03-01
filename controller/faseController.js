const faseModel = require('../model/faseModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class FaseController {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId(req, res) {
        //obtener el id del aprendiz
        const { codigoFase } = req.query;
        //validar que el id no sea nulo
        if (!codigoFase) {
            res.status(400).json({ error: 'El campo Codigo de Fase es requerido' });
            return;
        }
        //llamar el metodo del modelo
        faseModel.obtenerPorCodigoFase(codigoFase, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener la fase' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        faseModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener las fases' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorFase(req, res) {
        //obtener el nombre del archivo
        const { fases } = req.query;
        console.log('Buscando fase:', fases); // Log para debug
        //validar que el nombre no sea nulo
        if (!fases) {
            res.status(400).json({ error: 'El campo fase es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        faseModel.obtenerPorFase(fases, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener la fase' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarFase(req, res) {
        const { fases } = req.body;
        
        if (!fases ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (fases)'
            });
            return;
        }

       const fase ={
        fases
        
       };

            console.log(fase)

        faseModel.insertarFase(fase, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar la fase' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarFase(req, res) {
        //obtener el id del aprendiz
        const { codigoFase } = req.query;

        //validar que el id no sea nulo
        if (!codigoFase) {
            res.status(400).json({ error: 'El campo Codigo de Fase es requerido' });
            return;
        }
        //obtener data del body
        const {fases } = req.body;
        //validar los datos del body
        if (!fases ) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (Fases)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const fase = {
           fases
        };
        //validar que el objeto aprendiz no sea nulo
        if (!fase) {
            res.status(400).json({ error: 'El campo fase es requerido' });
            return;
        }

        //llamar el metodo del modelo
        faseModel.actualizarFase(codigoFase, fase, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar la fase' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarFase(req, res) {
        //obtener el id del aprendiz
        const { codigoFase } = req.query;
        //validar que el id no sea nulo
        if (!codigoFase) {
            res.status(400).json({ error: 'El campo Codigo de Fase es requerido' });
            return;
        }
        //llamar el metodo del modelo
        faseModel.eliminarFase(codigoFase, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar la fase' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = FaseController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this



const rapModel = require('../model/rapModel.js');
const { response } = require('express');

//crear la clase para el controlador del aprendiz

class RapController {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId(req, res) {
        //obtener el id del aprendiz
        const { idRAP } = req.query;
        //validar que el id no sea nulo
        if (!idRAP) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        rapModel.obtenerPorId(idRAP, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo obtener el Rap' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener todos los aprendices
    static obtenerTodos(req, res) {
        //llamar el metodo del modelo
        rapModel.obtenerTodos((err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudieron obtener los RAPS' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para obtener un aprendiz por su nombre
    static obtenerPorProyecto(req, res) {
        //obtener el nombre del archivo
        const { proyecto } = req.query;
        console.log('Buscando ide del Evento:', proyecto); // Log para debug
        //validar que el nombre no sea nulo
        if (!proyecto) {
            res.status(400).json({ error: 'El campo proyecto es requerido' });
            return; // Add return to stop execution if error
        }
        //llamar el metodo del modelo
        rapModel.obtenerPorProyecto(proyecto, (err, response) => {
            if (err) {
                console.error('Error:', err); // Log para debug
                res.status(500).json({ error: 'No se pudo obtener el proyecto' });
                return; // Add return to stop execution if error
            }
            console.log('Respuesta:', response); // Log para debug
            res.json(response);
        });
    }

    //metodo para insertar un aprendiz
    static insertarRap(req, res) {
        const {resultadoRAP, resultadoAP,fases, opciones, proyecto, idCompetencia, idFicha, idProyecto, codigoFase} = req.body;
        
        if (!proyecto || !idCompetencia ||!idFicha || !idProyecto ||!codigoFase ||!resultadoRAP ||!resultadoAP ||!fases ||!opciones) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (resultadoRAP, resultadoAP,fases, opciones, proyecto, idCompetencia, idFicha, idProyecto, idFase)'
            });
            return;
        }

       const rap ={
        proyecto,
        idCompetencia,
        idFicha,
        idProyecto,
        codigoFase,
        fases,
        resultadoRAP,
        resultadoAP,
        opciones
       };

         console.log(rap)

        rapModel.insertarRap(rap, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo insertar el rap' });
                return;
            }
            res.json(response);
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarRap(req, res) {
        //obtener el id del aprendiz
        const { idRAP } = req.query;

        //validar que el id no sea nulo
        if (!idRAP) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //obtener data del body
        const {resultadoRAP, resultadoAP,fases, opciones, proyecto, idCompetencia, idFicha, idProyecto, codigoFase} = req.body;
        //validar los datos del body
        if (!proyecto || !idCompetencia ||!idFicha || !idProyecto ||!codigoFase ||!resultadoRAP ||!resultadoAP ||!fases ||!opciones) {
            res.status(400).json({
                error: 'Todos los campos son requeridos (resultadoRAP, resultadoAP,fases, opciones, proyecto, idCompetencia, idFicha, idProyecto, idFase)'
            });
            return;
        }
        //crear objeto aprendiz con los campos recibidos
        const rap = {
            proyecto,
            idCompetencia,
            idFicha,
            idProyecto,
            codigoFase,
            resultadoRAP,
            resultadoAP,
            fases,
            opciones
        };
        //validar que el objeto aprendiz no sea nulo
        if (!rap) {
            res.status(400).json({ error: 'El campo rap es requerido' });
            return;
        }

        //llamar el metodo del modelo
        rapModel.actualiazrRap(idRAP, rap, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo actualizar el RAP' });
                return;
            }
            res.json(response);
        })
    }

    //metodo para eliminar un aprendiz
    static eliminarRap(req, res) {
        //obtener el id del aprendiz
        const { idRAP } = req.query;
        //validar que el id no sea nulo
        if (!idRAP) {
            res.status(400).json({ error: 'El campo id es requerido' });
            return;
        }
        //llamar el metodo del modelo
        rapModel.eliminarRap(id, (err, response) => {
            if (err) {
                res.status(500).json({ error: 'No se pudo eliminar el Rap' });
                return;
            }
            res.json(response);
        })
    }



}

module.exports = RapController;

// return ===> envia los datos hasta el momento y corta la ejecucion del codigo
// funcion flecha => tienen return explicito cuando tiene mas de una linea y no tienen contexto de this
// funcion normal function() tienen return implicito y tienen contexto de this





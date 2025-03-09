const TematicaModel = require('../model/tematicaModel');

//crea la clase para el controlador de tematica
class TematicaController{
    //Metodo para obtener todas las tematicas
    static obtenerTodos(req, res){
        TematicaModel.obtenerTodos((err, response) => {
            if(err){
                return res.json(err);
            }
            res.json(response);
        });
    }

    //Metodo para obtener una tematica por su id
    static obtenerPorId(req, res){
        const { id } = req.params;
        if(!id){
            return res.status(400).json({error: 'El campo id es requerido'});
        }
        TematicaModel.obtenerPorId(id, (err, response) => {
            if(err){
                return res.json(err);
            }
            res.json(response);
        });
    }

    //Metodo para insertar una tematica
    static insertarTematica(req, res){
        const {tema, idRAP} = req.body;
        if(!tema || !idRAP){
            return res.status(400).json({error: 'Todos los campos son requeridos'});
        }
        const tematica = {
            tema,
            idRAP
        }
        TematicaModel.insertarTematica(tematica, (err, response) => {
            if(err){
                return res.json(err);
            }
            res.json(response);
        });
    }

    //Metodo para actualizar una tematica
    static actualizarTematica(req, res){
        const { id } = req.params;
        const {tema, idRAP} = req.body;
        if(!tema || !idRAP){
            return res.status(400).json({error: 'Todos los campos son requeridos'});
        }
        const tematica = {
            tema,
            idRAP
        }
        TematicaModel.actualizarTematica(tematica, id, (err, response) => {
            if(err){
                return res.json(err);
            }
            res.json(response);
        });
    }

    //Metodo para eliminar una tematica
    static eliminarTematica(req, res){
        const { id } = req.params;
        TematicaModel.eliminarTematica(id, (err, response) => {
            if(err){
                return res.json(err);
            }
            res.json(response);
        });
    }
}

module.exports = TematicaController;
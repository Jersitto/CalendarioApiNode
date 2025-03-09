const conn = require('./connection/conn.js');

//crea la clase para el modelo de tematica
class TematicaModel{
    static obtenerPorId(id, callback){
        const query = 'SELECT * FROM tematica WHERE idTematica = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    static obtenerTodos(callback){
        const query = 'SELECT * FROM tematica';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    static obtenerPorTema(callback){
        const query = 'SELECT * FROM tematica WHERE tema LIKE ?';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    static insertarTematica(tematica,callback){
        const query = 'INSERT INTO tematica SET ?';
        conn.query(query, [tematica], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    static actualizarTematica(tematica, id, callback){
        const query = 'UPDATE tematica SET ? WHERE idTematica = ?';
        conn.query(query, [tematica, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }


    static eliminarTematica(id, callback){
        const query = 'DELETE FROM tematica WHERE idTematica = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }
}

module.exports = TematicaModel;
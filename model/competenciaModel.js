const conn = require('./connection/conn.js');

//crea la clase para el modelo de competencia

class CompetenciaModel {
    //metodo para obtener una competencia por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM competencia WHERE idCompetencia = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                console.error('Error:', err); // Log para debug
                callback(err, null);
            }
            console.log('Respuesta:', response); // Log para debug
            callback(null, response);
        });
    }

    //metodo para obtener todas los competencias
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM competencia';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener una competencia por su nombre
    static obtenerPorNombre(nombre, callback){
        const sql = `SELECT * FROM competencia WHERE nombreCompetencia LIKE '%${nombre}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar una competencia
    static insertarCompetencia(competencia, callback){
        const query = 'INSERT INTO competencia SET?';
        conn.query(query, [competencia], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para actualizar una competencia
    static actualizarCompetencia(id, competencia, callback){
        const query = 'UPDATE competencia SET? WHERE idCompetencia =?';
        conn.query(query, [competencia, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para eliminar una competencia
    static eliminarCompetencia(id, callback){
        const query = 'DELETE FROM competencia WHERE idCompetencia =?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

}

module.exports = CompetenciaModel;
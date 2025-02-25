const conn = require('./connection/conn.js');

//crea la clase para el modelo de competencia

class CompetenciaModel {
    //metodo para obtener una competencia por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM competencia WHERE idCompetencia = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }
}

module.exports = CompetenciaModel;
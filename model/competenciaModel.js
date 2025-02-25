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
}

module.exports = CompetenciaModel;
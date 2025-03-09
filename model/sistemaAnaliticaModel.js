const conn = require('./connection/conn.js');

//crea la clase para el modelo de tematica
class SistemaAnaliticaModel{
    //metodo para obetener analiticas
    static obtenerAnaliticas(callback){
        const query = 'SELECT * FROM sistemaanalitica';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo apra obtener por metrica
    static obtenerPorMetrica(metrica ,callback){
        const query = 'SELECT * FROM sistemaanalitica WHERE metrica LIKE ?';
        conn.query(query, [metrica], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener por aprendiz_id
    static obtenerPorAprendiz(aprendiz_id, callback){
        const query = 'SELECT * FROM sistemaanalitica WHERE aprendiz_id = ?';
        conn.query(query, [aprendiz_id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para insertar una analitica
    static insertarAnalitica(analitica,callback){
        const query = 'INSERT INTO sistemaanalitica SET ?';
        conn.query(query, [analitica], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para actualizar una analitica
    static actualizarAnalitica(analitica, id, callback){
        const query = 'UPDATE sistemaanalitica SET ? WHERE id = ?';
        conn.query(query, [analitica, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para eliminar una analitica
    static eliminarAnalitica(id, callback){
        const query = 'DELETE FROM sistemaanalitica WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener por id
    static obtenerPorId(id, callback){
        const query = 'SELECT * FROM sistemaanalitica WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                return callback(err, null);
            }
            
            // Add debugging information
            console.log(`Buscando analitica con ID: ${id}`);
            console.log(`Resultado de la consulta:`, response);
            
            // Return error if response is empty
            if (!response || response.length === 0) {
                return callback({ error: `No se encontró ninguna analítica con ID ${id}` }, null);
            }
            
            callback(null, response);
        });
    }
}

module.exports = SistemaAnaliticaModel;
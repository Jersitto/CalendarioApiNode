const conn = require('./connection/conn.js');


class ConocimientosModel {
    // Metodo para obtener un conocimiento por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM conocimientos WHERE idConocimiento = ?';
        conn.query(query, [id], (err, response) => {
            if(err) {
                console.error('Error:', err);
                callback(err, null);
            }
            callback(null, response);
        });
        
    }
    
    // Metodo para obtener todos los conocimientos
    static obtenerTodos (callback) {
        const query = 'SELECT * FROM conocimientos';
        conn.query(query, (err, response) => {
            if(err) {
                console.error('Error:', err);
                callback(err, null);
            }
            callback(null, response);
        });
    }
    
    // Metodo para insertar un nuevo conocimiento
    static insertarConocimiento (conocimiento, callback) {
        const query = 'INSERT INTO conocimientos SET ?';
        conn.query(query, [conocimiento], (err, response) => {
            if(err) {
                console.error('Error:', err);
                callback(err, null);
            }
            callback(null, {mensaje: 'Conocimiento insertado correctamente'});
        });
    }
    
    // Metodo para actualizar un conocimiento
    static actualizarConocimiento (id, conocimiento, callback) {
        const query = 'UPDATE conocimientos SET? WHERE idConocimiento =?';
        conn.query(query, [conocimiento, id], (err, response) => {
            if(err) {
                console.error('Error:', err);
                callback(err, null);
            }
            callback(null, {mensaje: 'Conocimiento actualizado correctamente'});
        });
    }
    
    // Metodo para eliminar un conocimiento
    static eliminarConocimiento (id, callback) {
        const query = 'DELETE FROM conocimientos WHERE idConocimiento =?';
        conn.query(query, [id], (err, response) => {
            if(err) {
                console.error('Error:', err);
                callback(err, null);
            }
            callback(null, {mensaje: 'Conocimiento eliminado correctamente'});
        });
    }

}

module.exports = ConocimientosModel;
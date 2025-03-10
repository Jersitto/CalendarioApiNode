const conn = require('./connection/conn.js');

class SincronizacionModel {
    //metodo para obtener sincronizaciones
    static obtenerSincronizaciones(callback) {
        const query = 'SELECT * FROM sincronizacion';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }
    
    //metodo para obtener sincronizacion por id
    static obtenerPorId(id, callback) {
        const query = 'SELECT * FROM sincronizacion WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener por dispositivo
    static obtenerPorDispositivo(dispositivo, callback) { 
        const query = 'SELECT * FROM sincronizacion WHERE dispositivo_id = ?';
        conn.query(query, [dispositivo], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener una sincronizacion por evento
    static obtenerPorEvento(evento, callback) {
        const query = 'SELECT * FROM sincronizacion WHERE evento_id = ?';
        conn.query(query, [evento], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para insertar una sincronizacion
    static insertarSincronizacion(sincronizacion, callback) {
        const query = 'INSERT INTO sincronizacion SET ?';
        conn.query(query, [sincronizacion], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Sincronizacion insertada correctamente', sincronizacion: sincronizacion});
        });
    }

    //metodo para actualizar una sincronizacion
    static actualizarSincronizacion(id, sincronizacion, callback) {
        const query = 'UPDATE sincronizacion SET ? WHERE id = ?';
        conn.query(query, [sincronizacion, id], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Sincronizacion actualizada correctamente', sincronizacion: sincronizacion});
        });
    }   

    //metodo para eliminar una sincronizacion
    static eliminarSincronizacion(id, callback) {
        const query = 'DELETE FROM sincronizacion WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Sincronizacion eliminada correctamente'});
        });
    }
}

module.exports = SincronizacionModel;
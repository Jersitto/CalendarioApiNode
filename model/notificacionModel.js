const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class NotificacionModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM notificacion WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM notificacion';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorMensaje(mensaje, callback) {
        const sql = `SELECT * FROM notificacion WHERE mensaje LIKE '%${mensaje}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarNotificacion(notificacion, callback) {
        const query = 'INSERT INTO notificacion SET ?';
        conn.query(query, [notificacion], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Notificacion insertada correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarNotificacion(id,notificacion, callback) {
        const query = 'UPDATE notificacion SET ? WHERE id = ?';
        conn.query(query, [notificacion, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Notificacion actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarNotificacion(id, callback) {
        const query = 'DELETE FROM notificacion WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Notificacion eliminado correctamente'});
        });
    }

}



module.exports = NotificacionModel;
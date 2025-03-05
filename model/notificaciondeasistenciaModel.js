const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class NotificacionDeAsistenciaModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM notificaciondeasistencia WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM notificaciondeasistencia';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorMensaje(mensaje, callback) {
        const sql = `SELECT * FROM notificaciondeasistencia WHERE mensaje LIKE '%${mensaje}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarNotificacionDeAsistencia(notificaciondeasistencia, callback) {
        const query = 'INSERT INTO notificaciondeasistencia SET ?';
        conn.query(query, [notificaciondeasistencia], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Notificacion de Asistencia insertado correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarNotificacionDeAsistencia(id,notificaciondeasistencia, callback) {
        const query = 'UPDATE notificaciondeasistencia SET ? WHERE id = ?';
        conn.query(query, [notificaciondeasistencia, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Notificacion de Asistencia actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarNotificacionDeAsistencia(id, callback) {
        const query = 'DELETE FROM notificaciondeasistencia WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Notificacion de Asistencia eliminado correctamente'});
        });
    }

}



module.exports = NotificacionDeAsistenciaModel;
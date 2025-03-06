const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class RecordatorioModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM recordatorio WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM recordatorio';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorFechaRecordatorio(fechaRecordatorio, callback) {
        const sql = `SELECT * FROM recordatorio WHERE fechaRecordatorio LIKE '%${fechaRecordatorio}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarRecordatorio(recordatorio, callback) {
        const query = 'INSERT INTO recordatorio SET ?';
        conn.query(query, [recordatorio], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Recordatorio insertado correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarRecordatorio(id,recordatorio, callback) {
        const query = 'UPDATE recordatorio SET ? WHERE id = ?';
        conn.query(query, [recordatorio, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'recordatorio actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarRecordatorio(id, callback) {
        const query = 'DELETE FROM recordatorio WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Recordatorio eliminado correctamente'});
        });
    }

}



module.exports = RecordatorioModel;
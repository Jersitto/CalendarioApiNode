const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class MuestraEventoModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (vista_id, callback) {
        const query = 'SELECT * FROM muestraeventos WHERE vista_id = ?';
        conn.query(query, [vista_id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM muestraeventos';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorEventoIde(evento_id, callback) {
        const sql = `SELECT * FROM muestraeventos WHERE evento_id LIKE '%${evento_id}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarMuestraEvento(muestraeventos, callback) {
        const query = 'INSERT INTO muestraeventos SET ?';
        conn.query(query, [muestraeventos], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Muestra del Evento insertado correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarMuestraEvento(vista_id,muestraeventos, callback) {
        const query = 'UPDATE muestraeventos SET ? WHERE vista_id = ?';
        conn.query(query, [muestraeventos, vista_id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Muestra del Evento actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarMuestraEvento(vista_id, callback) {
        const query = 'DELETE FROM muestraeventos WHERE vista_id = ?';
        conn.query(query, [vista_id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Muestra del Evento eliminado correctamente'});
        });
    }

}



module.exports = MuestraEventoModel;
const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class CalendarioEventoModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM calendarioevento WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM calendarioevento';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorEventoIde(evento_id, callback) {
        const sql = `SELECT * FROM calendarioevento WHERE evento_id LIKE '%${evento_id}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarCalendarioEvento(calendarioevento, callback) {
        const query = 'INSERT INTO calendarioevento SET ?';
        conn.query(query, [calendarioevento], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'CalendarioEvento insertado correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarCalendarioEvento(id,calendarioevento, callback) {
        const query = 'UPDATE calendarioevento SET ? WHERE id = ?';
        conn.query(query, [calendarioevento, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'CalendarioEvento actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarCalendarioEvento(id, callback) {
        const query = 'DELETE FROM calendarioevento WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'CalendarioEvento eliminado correctamente'});
        });
    }

}



module.exports = CalendarioEventoModel;
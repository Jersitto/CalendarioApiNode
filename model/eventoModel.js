const conn = require('./connection/conn');

class EventoModel {
    //metodo para obtener un evento por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM evento WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los eventos
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM evento';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un evento por su nombre
    static obtenerPorNombre(nombre, callback){
        const sql = `SELECT * FROM evento WHERE nombre LIKE '%${nombre}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }
    // Método para obtener eventos por aprendiz_id
static obtenerEventosPorAprendiz(aprendizId, callback) {
    const query = 'SELECT * FROM evento WHERE aprendiz_id = ? AND eliminado = 0';
    conn.query(query, [aprendizId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

    //metodo para insertar un evento
    static insertarEvento(evento, callback) {
        const query = 'INSERT INTO evento SET ?';
        conn.query(query, [evento], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Evento insertado correctamente'});
        });
    }

    //metodo para actualizar un evento
    static actualizarEvento(id, evento, callback) {
        const query = 'UPDATE evento SET ? WHERE id = ?';
        conn.query(query, [evento, id], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Evento actualizado correctamente'});
        });
    }

    //metodo para eliminar un evento
    static eliminarEvento(id, callback) {
        const query = 'DELETE FROM evento WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Evento eliminado correctamente'});
        });
    }
}

module.exports = EventoModel;
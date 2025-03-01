const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class ComentarioModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM comentario WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM comentario';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorContenido(contenido, callback) {
        const sql = `SELECT * FROM comentario WHERE contenido LIKE '%${contenido}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarComentario(comentario, callback) {
        const query = 'INSERT INTO comentario SET ?';
        conn.query(query, [comentario], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Comentario insertado correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarComentario(id,comentario, callback) {
        const query = 'UPDATE comentario SET ? WHERE id = ?';
        conn.query(query, [comentario, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Comentario actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarComentario(id, callback) {
        const query = 'DELETE FROM comentario WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Comentario eliminado correctamente'});
        });
    }

}



module.exports = ComentarioModel;
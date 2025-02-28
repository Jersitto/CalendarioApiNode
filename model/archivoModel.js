const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class ArchivoModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM archivo WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM archivo';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorNombre(nombre, callback) {
        const sql = `SELECT * FROM archivo WHERE nombre LIKE '%${nombre}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarArchivo(archivo, callback) {
        const query = 'INSERT INTO archivo SET ?';
        conn.query(query, [archivo], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Archivo insertado correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarArchivo(id,archivo, callback) {
        const query = 'UPDATE archivo SET ? WHERE id = ?';
        conn.query(query, [archivo, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Archivo actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarArchivo(id, callback) {
        const query = 'DELETE FROM archivo WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Archivo eliminado correctamente'});
        });
    }

}



module.exports = ArchivoModel;
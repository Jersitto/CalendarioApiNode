const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class AprendizModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM aprendiz WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM aprendiz';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorNombre(nombre, callback) {
        const sql = `SELECT * FROM aprendiz WHERE nombre LIKE '%${nombre}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarAprendiz(aprendiz, callback) {
        const query = 'INSERT INTO aprendiz SET ?';
        conn.query(query, [aprendiz], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Aprendiz insertado correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarAprendiz(id, documento, nombre, programa, centro, regional, rh, callback) {
        const aprendiz = {
            documento,
            nombre, 
            programa,
            centro,
            regional,
            rh
        };
        const query = 'UPDATE aprendiz SET ? WHERE id = ?';
        conn.query(query, [aprendiz, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Aprendiz actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarAprendiz(id, callback) {
        const query = 'DELETE FROM aprendiz WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Aprendiz eliminado correctamente'});
        });
    }

}



module.exports = AprendizModel;
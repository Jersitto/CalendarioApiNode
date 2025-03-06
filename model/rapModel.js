const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class RapModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (idRAP, callback) {
        const query = 'SELECT * FROM rap WHERE idRAP = ?';
        conn.query(query, [idRAP], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM rap';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorProyecto(proyecto, callback) {
        const sql = `SELECT * FROM rap WHERE proyecto LIKE '%${proyecto}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarRap(rap, callback) {
        const query = 'INSERT INTO rap SET ?';
        conn.query(query, [rap], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Rap insertado correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualiazrRap(idRAP,rap, callback) {
        const query = 'UPDATE rap SET ? WHERE idRAP = ?';
        conn.query(query, [rap, idRAP], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Rap actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarRap(idRAP, callback) {
        const query = 'DELETE FROM rap WHERE idRAP = ?';
        conn.query(query, [idRAP], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Rap eliminado correctamente'});
        });
    }

}



module.exports = RapModel;
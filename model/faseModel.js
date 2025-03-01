const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class FaseModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (codigoFase, callback) {
        const query = 'SELECT * FROM fase WHERE codigoFase = ?';
        conn.query(query, [codigoFase], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM fase';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorFase(fases, callback) {
        const sql = `SELECT * FROM fase WHERE fases LIKE '%${fases}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarFase(fase, callback) {
        const query = 'INSERT INTO fase SET ?';
        conn.query(query, [fase], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'fase insertada correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarFase(codigoFase,fase, callback) {
        const query = 'UPDATE fase SET ? WHERE codigoFase = ?';
        conn.query(query, [fase, codigoFase], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Fase actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarFase(codigoFase, callback) {
        const query = 'DELETE FROM fase WHERE codigoFase= ?';
        conn.query(query, [codigoFase], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Fase eliminado correctamente'});
        });
    }

}



module.exports = FaseModel;
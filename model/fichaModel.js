const conn = require('./connection/conn');

class FichaModel {
    //metodo para obtener una ficha por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM ficha WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todas las fichas
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM ficha';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener una ficha por numero de ficha
    static obtenerPorNumero(nombre, callback){
        const sql = `SELECT * FROM ficha WHERE numFicha LIKE '%${nombre}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar una ficha
    static insertarFicha(ficha, callback) {
        const query = 'INSERT INTO ficha SET ?';
        conn.query(query, [ficha], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Ficha insertada correctamente'});
        });
    }

    //metodo para actualizar una ficha
    static actualizarFicha(id, ficha, callback) {
        const query = 'UPDATE ficha SET ? WHERE idFicha = ?';
        conn.query(query, [ficha, id], (err, response) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Ficha actualizada correctamente'});
        });
    }

    //metodo para eliminar una ficha
    static eliminarFicha(id, callback) {
        const query = 'DELETE FROM ficha WHERE idFicha = ?';
        conn.query(query, [id], (err, response) => {
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Ficha eliminada correctamente'});
        });
    }
}

module.exports = FichaModel;

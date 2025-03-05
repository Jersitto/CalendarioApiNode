const conn = require('./connection/conn.js');

//crea la clase para el modelo de aprendiz

class DispositivoMovilModel {
    //metodo para obtener un aprendiz por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM dispositivomovil WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todos los aprendices 
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM dispositivomovil';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para para obtener un aprendiz por su nombre
    static obtenerPorNombre(nombre, callback) {
        const sql = `SELECT * FROM dispositivomovil WHERE nombre LIKE '%${nombre}%'`;
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    //metodo para insertar un aprendiz
    static insertarDispositivoMovil(dispositivomovil, callback) {
        const query = 'INSERT INTO dispositivomovil SET ?';
        conn.query(query, [dispositivomovil], (err, response) =>{
            if(err){
                callback(err, null);
                return;
            }
            callback(null, {mensaje: 'Dispositivo Modil insertado correctamente'});
        });
    }

    //metodo para actualizar un aprendiz
    static actualizarDispositivoMovil(id,dispositivomovil, callback) {
        const query = 'UPDATE dispositivomovil SET ? WHERE id = ?';
        conn.query(query, [dispositivomovil, id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Dispositivo Movil actualizado correctamente'});
        });
    }

    //metodo para eliminar un aprendiz
    static eliminarDispositivoMovil(id, callback) {
        const query = 'DELETE FROM dispositivomovil WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, {mensaje: 'Dispositivo Movil eliminado correctamente'});
        });
    }

}



module.exports = DispositivoMovilModel;
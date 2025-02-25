const conn = require('./connection/conn');

class HorarioModel {
    //metodo para obtener un horario por su id
    static obtenerPorId (id, callback) {
        const query = 'SELECT * FROM horario WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //metodo para obtener todas los horarios
    static obtenerTodos(callback) {
        const query = 'SELECT * FROM horario';
        conn.query(query, (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }
    //metodo para obtener un horario por idFicha
    static obtenerPorIdFicha(idFicha, callback) {
        const query = 'SELECT * FROM horario WHERE idFicha = ?';
        conn.query(query, [idFicha], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }
    //metodo para insertar un horario
    static insertarHorario(horario, callback) {
        const query = 'INSERT INTO horario SET ?';
        conn.query(query, [horario], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }
    //metodo para actualizar un horario
    static actualizarHorario(horario, callback) {
        const query = 'UPDATE horario SET ? WHERE id = ?';
        conn.query(query, [horario, horario.id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }
    //metodo para eliminar un horario
    static eliminarHorario(id, callback) {
        const query = 'DELETE FROM horario WHERE id = ?';
        conn.query(query, [id], (err, response) =>{
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }
}

module.exports = HorarioModel;
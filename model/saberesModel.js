const conn = require('./connection/conn.js');

class SaberesModel {
    //metodo para obtener un saberes por su id
    static obtenerPorId(id, callback) {
        //query de consulta
        const query = 'SELECT * FROM saberes WHERE idSaber = ?';
        //ejecutar la consulta
        conn.query(query, [id], (err, rows) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, rows);
        });
    }

    //metodo para obtener todos los saberes
    static obtenerTodos(callback) {
        //query de consulta
        const query = 'SELECT * FROM saberes';
        //ejecutar la consulta
        conn.query(query, (err, rows) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, rows);
        });
    }

    //metodo para obtener un saberes por su nombre
    static obtenerPorNombre(nombre, callback) {
        //query de consulta
        const query = 'SELECT * FROM saberes WHERE saber = ?';
        //ejecutar la consulta
        conn.query(query, [nombre], (err, rows) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, rows);
        });
    }

    //metodo para insertar un saberes
    static insertarSaberes(saberes, callback) {
        //query de insercion
        const query = 'INSERT INTO saberes SET ?';
        console.log('Query:', query); // Log para debug
        console.log('Datos a insertar:', saberes); // Log para debug
        //ejecutar la consulta
        conn.query(query, saberes, (err, result) => {
            if (err) {
                console.error('Error SQL:', err.message); // Log detallado del error
                callback(err, null);
                return;
            }
            callback(null, { mensaje: 'Saber insertado correctamente', data: result });
        });
    }

    //metodo para actualizar un saberes
    static actualizarSaberes(id, saberes, callback) {  // Corregir el orden de los parámetros
        //query de actualizacion
        const query = 'UPDATE saberes SET ? WHERE idSaber = ?';
        //ejecutar la consulta
        conn.query(query, [saberes, id], (err, result) => {  // Corregir el orden de los parámetros
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, { mensaje: 'Saber actualizado correctamente', data: result });
        });
    }

    //metodo para eliminar un saberes
    static eliminarSaberes(id, callback) {
        //query de eliminacion
        const query = 'DELETE FROM saberes WHERE idSaber = ?';
        //ejecutar la consulta
        conn.query(query, [id], (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    }
}


module.exports = SaberesModel;
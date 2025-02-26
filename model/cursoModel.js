const conn = require('./connection/conn.js');

class CursoModel {
    //metodo para obtener un curso por su id
    static obtenerPorId(id, callback) {
        //query de consulta
        const query = 'SELECT * FROM curso WHERE id = ?';
        //ejecutar la consulta
        conn.query(query, [id], (err, rows) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, rows);
        });
    }

    //metodo para obtener todos los cursos
    static obtenerTodos(callback) {
        //query de consulta
        const query = 'SELECT * FROM curso';
        //ejecutar la consulta
        conn.query(query, (err, rows) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, rows);
        });
    }

    //metodo para obtener un curso por su nombre
    static obtenerPorNombre(nombre, callback) {
        //query de consulta
        const query = 'SELECT * FROM curso WHERE nombre = ?';
        //ejecutar la consulta
        conn.query(query, [nombre], (err, rows) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, rows);
        });
    }

    //metodo para obtener un curso por aprendiz_id
    static obtenerPorAprendizId(aprendiz_id, callback) {
        //query de consulta
        const query = 'SELECT * FROM curso WHERE aprendiz_id = ?';
        //ejecutar la consulta
        conn.query(query, [aprendiz_id], (err, rows) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, rows);
        });
    }

    //metodo para insertar un curso
    static insertarCurso(curso, callback) {
        //query de la consulta
        const query = 'INSERT INTO curso SET ?';
        //ejecutar la consulta
        conn.query(query, [curso], (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    }

    //metodo para actualizar un curso
    static actualizarCurso(id, curso, callback) {
        //query de la consulta
        const query = 'UPDATE curso SET ? WHERE id = ?';
        //ejecutar la consulta
        conn.query(query, [curso, id], (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    }

    //metodo para eliminar un curso
    static eliminarCurso(id, callback) {
        //query de la consulta
        const query = 'DELETE FROM curso WHERE id = ?';
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

module.exports = CursoModel;
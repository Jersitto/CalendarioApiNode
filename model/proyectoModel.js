const conn = require('./connection/conn.js');

class ProyectoModel {
    //Metodo para obtener un proyecto por su id 
    static obtenerPorId(id, callback){
        const query = 'SELECT * FROM proyecto WHERE idProyecto = ?';
        conn.query(query, [id], (err, response) => {
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //Metodo para obtener todos los proyectos
    static obtenerTodos(callback){
        const query = 'SELECT * FROM proyecto';
        conn.query(query, (err, response) => {
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //Metodo para obtener un proyecto por codigo
    static obtenerPorCodigo(codigo, callback){
        const query = 'SELECT * FROM proyecto WHERE codigo = ?';
        conn.query(query, [codigo], (err, response) => {
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //Metodo para insertar un proyecto
    static insertarProyecto(proyecto, callback){
        const query = 'INSERT INTO proyecto SET ?';
        conn.query(query, [proyecto], (err, response) => {
            if(err){
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //Metodo para actualizar un proyecto
    static actualizarProyecto(proyecto, id, callback){
        const query = 'UPDATE proyecto SET ? WHERE idProyecto = ?';
        console.log('Consulta SQL:', query); // Log de depuración
        conn.query(query, [proyecto, id], (err, response) => {
            if(err){
                console.error('Error en la consulta SQL:', err); // Log de depuración
                callback(err, null);
            }
            callback(null, response);
        });
    }

    //Metodo para eliminar un proyecto
    static eliminarProyecto(id, callback){
        const query = 'DELETE FROM proyecto WHERE idProyecto = ?';
        console.log('Consulta SQL:', query); // Log de depuración
        conn.query(query, [id], (err, response) => {
            if(err){
                console.error('Error en la consulta SQL:', err); // Log de depuración
                callback(err, null);
            }
            callback(null, response);
        });
    }
}

module.exports = ProyectoModel;